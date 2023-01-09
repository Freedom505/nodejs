import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./router/rootrouter";
import userRouter from "./router/userrouter";
import videoRouter from "./router/videorouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
// express가 form의 value들을 이해할수 있게 해주는 코드

app.use(
  // 서버에 들어오는 브라우저들에 session id를 보내준다.session을 초기화 해주는 코드.
  session({
    secret: "hello",
    resave: true,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    // 백엔드가 기억하고 있는 sessions를 콘솔에 보여준다.
    console.log(sessions);
    next();
  });
});

app.get("/add-one", (req, res, next) => {
  req.session.potato += 1;
  return res.send(`${req.session.id}\n${req.session.potato}`);
});
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;
