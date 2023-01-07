import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  videoDelete,
  comments,
  commentsDelete,
} from "../controller/videocontroller";

const videoRouter = express.Router();
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit); //두개를 한번에
videoRouter.get("/:id([0-9a-f]{24})/delete", videoDelete);
videoRouter.get("/:id([0-9a-f]{24})/comments", comments);
videoRouter.get("/:id([0-9a-f]{24})/comments/delete", commentsDelete);

export default videoRouter;
