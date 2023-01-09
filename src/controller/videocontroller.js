import Video from "../models/video";

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  // db에서 검색해서 video 변수에 넣어주는 코드가 if문 안에 있다.만약 keyword가 없을 경우 if문이 작동 안 해서 videos가 null이 되기에 렌더링에 videos를 보내줄수 없게 된다.
  //그렇기에 let으로 빈 어레이를 만들어 준다
  if (keyword) {
    videos = await Video.find({
      // const 붙이지 말자 밖에 있는 videos를 가져온거임
      title: {
        $regex: new RegExp(keyword, "i"), // regular expression 정규식을 사용할수 있게 해주는 코드다.i는 대소문자 구분 안 한다는 소리.정규식을 좀 더 공부해보자
      },
    });
  }
  res.render("search", { pageTitle: "Search", videos });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res
      .status(404)
      .render("404", { pageTitle: "해당 동영상을 재생할수 없습니다." }); // 리턴 하는게 중요함!
  }
  res.render("edit", { pageTitle: `Editing: ${video.title}`, video: video });
};
export const postEdit = async (req, res) => {
  const { title, description, hashtags } = req.body;
  const { id } = req.params;
  //exists는 filter를 받는다.
  const video = await Video.exists({ _id: id }); // 해당 동영상이 존재하는지 확인하는 함수. _id는 오브젝트 내의 id이다.그게 js의 id와 일치하는지 확인하는것.boolean 값을 반환함.
  if (!video) {
    return res
      .status(404)
      .render("404", { pageTitle: "해당 동영상을 재생할수 없습니다." });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags), // hashtag가 #으로 시작하지 않을 때만 #을 붙여주는 코드
  });
  return res.redirect(`/video/${id}`);
};
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });
export const postUpload = async (req, res) => {
  try {
    const { title, description, hashtags } = req.body;
    await Video.create({
      title: title,
      description: description,
      hashtags: Video.formatHashtags(hashtags), // hashtag가 #으로 시작하지 않을 때만 #을 붙여주는 코드
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .render("upload", { pageTitle: "upload", errorMessage: error._message });
  }
};
export const videoDelete = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};
export const comments = (req, res) => res.send("video comments");
export const commentsDelete = (req, res) => res.send("video comments delete");
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id); // 아이디로 해당하는 영상을 찾아준다.await 꼭 달아야 됨.
  if (!video) {
    // video===null도 가능
    return res
      .status(404)
      .render("404", { pageTitle: "해당 동영상을 재생할수 없습니다." });
  }
  res.render("watch", { pageTitle: video.title, video });
};

export const home = async (req, res) => {
  const videos = await Video.find({}).sort({ createdAt: "desc" }); // sort는 정렬 순서를 설정할수 있다. 오름차순 asc 내림차순 desc
  res.render("home", { pageTitle: "Home", videos });
};
