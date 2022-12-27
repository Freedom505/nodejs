import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalrouter";
import userRouter from "./router/userrouter";
import videoRouter from "./router/videorouter";

const app = express();
const port = 4000;
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
// express가 form이 value들을 이해할수 있게 해주는 코드
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

const handleListening = () =>
  console.log(`Server Listening on http://localhost:${port}`);

app.listen(port, handleListening);
