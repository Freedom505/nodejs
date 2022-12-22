import express from "express";
import {
  watch,
  videoEdit,
  upload,
  videoDelete,
  comments,
  commentsDelete,
} from "../controller/videocontroller";

const videoRouter = express.Router();

videoRouter.get("/upload*", upload);
videoRouter.get("/:id", watch);
videoRouter.get("/:id/edit", videoEdit);
videoRouter.get("/:id/delete", videoDelete);
videoRouter.get("/:id/comments", comments);
videoRouter.get("/:id/comments/delete", commentsDelete);

export default videoRouter;
