import express from "express";
import morgan from "morgan";

const app = express();
const port = 4000;
const logger = morgan("dev");

const handleHome = (req, res) => {
  return res.send("여기는 홈페이지야");
};

const handelLogin = (req, res) => {
  return res.send("여기는 로그인 페이지야");
};

const handelProtected = (req, res) => {
  return res.send("이곳은 보안 페이지입니다.");
};

app.use(logger);
app.get("/", handleHome);
app.get("/login", handelLogin);
app.get("/protected", handelProtected);

const handleListening = () =>
  console.log(`Server Listening on http://localhost:${port}`);

app.listen(port, handleListening);
