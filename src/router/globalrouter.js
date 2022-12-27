import express from "express";
import { login, join } from "../controller/uesrcontroller";
import { search, home } from "../controller/videocontroller";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/login", login);
globalRouter.get("/search", search);
globalRouter.get("/join", join);

export default globalRouter;
