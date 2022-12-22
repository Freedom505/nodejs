import express from "express";
import { userEdit, userDelete } from "../controller/uesrcontroller";

const userRouter = express.Router();

userRouter.get("/edit", userEdit);
userRouter.get("/delete", userDelete);

export default userRouter;
