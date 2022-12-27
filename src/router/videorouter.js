import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  upload,
  videoDelete,
  comments,
  commentsDelete,
} from "../controller/videocontroller";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", watch);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit); //두개를 한번에
videoRouter.get("/:id/delete", videoDelete);
videoRouter.get("/:id/comments", comments);
videoRouter.get("/:id/comments/delete", commentsDelete);

export default videoRouter;
