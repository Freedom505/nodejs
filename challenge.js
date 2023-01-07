import express from "express";
import morgan from "morgan";

const logger = morgan("dev");

const app = express();
app.use(logger);

const globalRouter = express.Router();
const userRouter = express.Router();
const storyRouter = express.Router();

const home = (req, res) => res.send("<h1>Here is home<h1>");
const trending = (req, res) => res.send("<h1>Here is trending<h1>");
const globalNew = (req, res) => res.send("<h1>Here is new<h1>");
const join = (req, res) => res.send("<h1>Here is join<h1>");
const login = (req, res) => res.send("<h1>Here is login<h1>");

const users = (req, res) => res.send("<h1>Here is users<h1>");
const usersId = (req, res) =>
  res.send(`<h1>Here is usersId #${req.params.id}<h1>`);
const editProfile = (req, res) => res.send("<h1>Here is edit profile</h1>");

const storyId = (req, res) =>
  res.send(`<h1>Here is storyId #${req.params.id}</h1>`);
const storyEdit = (req, res) =>
  res.send(`<h1>Here is story edit #${req.params.id}</h1>`);
const storyDelete = (req, res) =>
  res.send(`<h1>Here is story delete #${req.params.id}</h1>`);

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", globalNew);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

userRouter.get("/", users);
userRouter.get("/edit-profile", editProfile);
userRouter.get("/:id", usersId);

storyRouter.get("/:id", storyId);
storyRouter.get("/:id/edit", storyEdit);
storyRouter.get("/:id/delete", storyDelete);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);

const serverListen = () => console.log("http://localhost:4001");
app.listen(4001, serverListen);
