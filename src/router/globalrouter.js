import express from "express";
import { home, login, join } from "../controller/uesrcontroller";
import { search } from "../controller/videocontroller";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/login", login);
globalRouter.get("/search", search);
globalRouter.get("/join", join);

export default globalRouter;
