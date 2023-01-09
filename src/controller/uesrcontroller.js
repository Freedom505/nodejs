import User from "../models/user";
import bcrypt from "bcrypt";

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "존재하지 않는 username입니다.",
    });
  }
  const ok = await bcrypt.compare(password, user.password); // 비밀번호를 db와 비교해서 확인하는 코드.입력한 비밀번호와 db에 해싱된 비밀번호를 비교하고 불린을 리턴한다.
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "잘못된 password입니다.",
    });
  }
  res.redirect("/");
};
export const userEdit = (req, res) => res.send("user edit");
export const userDelete = (req, res) => res.send("user delete");
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { email, password, password2, name, username, location } = req.body;
  const userExist = await User.exists({ $or: [{ username }, { email }] });
  // or 연산자는 둘중에 하나만 일치해도 true를 리턴한다.두개를 동시에 검사할수 있다는 장점을 가짐.
  // const emailExist = await User.exists({ email: email }); 에러 메세지를 각각 구분해서 보내고 싶다면 이렇게 코드는 중복해서 써주자
  if (password !== password2) {
    return res.status(400).render("join", {
      // status(400)은 브라우저에게 응답이 제대로 이루어지지 않았다고 알려주는 코드이다.정상작동이 200대 잘못된게 400대
      // 리턴을 반드시 넣어야 아래 코드가 더이상 작동하지 않음.if문은 함수가 아님
      pageTitle: "Join",
      errorMessage: "비밀번호가 일치하지 않습니다.",
    });
  }
  if (userExist) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "This username/email is already taken",
    });
  }
  // if (emailExist) {
  //   return res.render("join", {
  //     pageTitle: "Join",
  //     errorMessage: "This email is already taken",
  //   });
  // }
  try {
    await User.create({
      email,
      password,
      name,
      username,
      location,
    });
  } catch (error) {
    console.log(error);
    res
      .statsu(400)
      .render("join", { pageTitle: "Join", errorMessage: error._message });
  }
  res.redirect("/login");
  res.render("join", { pageTitle: "Join" });
};
