import express from "express";
import {
  getLogin,
  postLogin,
  getJoin,
  postJoin,
} from "../controller/uesrcontroller";
import { search, home } from "../controller/videocontroller";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", search);
rootRouter.route("/join").get(getJoin).post(postJoin);

export default rootRouter;
