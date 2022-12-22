import express from "express";
import {
  handleWatch,
  handleEdit,
  handleUpload,
} from "../controller/videocontroller";

const videoRouter = express.Router();

videoRouter.get("/watch", handleWatch);
videoRouter.get("/edit", handleEdit);
videoRouter.get("/upload", handleUpload);

export default videoRouter;
