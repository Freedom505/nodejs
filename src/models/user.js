import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // unique는 같은게 db에 존재할수 없게 해준다.
  password: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  location: String,
});

userSchema.pre("save", async function () {
  // 저장하기 전에 저장하는 값들을 수정할수 있게 해주는 코드이다. bcrypt를 사용해서 비밀번호가 db에 저장되기 전에 해싱한뒤 저장을 했다.pre에 대해서 공부해보자
  this.password = await bcrypt.hash(this.password, 5); // 해시를 5번 반복한다는 뜻
});

const User = mongoose.model("User", userSchema);
export default User;
