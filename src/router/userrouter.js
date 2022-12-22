import express from "express";
import { handelEdit, handleDelete } from "../controller/uesrcontroller";

const userRouter = express.Router();

userRouter.get("/edit", handelEdit);
userRouter.get("/delete", handleDelete);

export default userRouter;
