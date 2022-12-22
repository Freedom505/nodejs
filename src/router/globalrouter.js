import express from "express";
import { handleHome, handleLogin } from "../controller/uesrcontroller";
import { handelWatch } from "../controller/videocontroller";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/login", handleLogin);
globalRouter.get("/search", handelWatch);

export default globalRouter;
