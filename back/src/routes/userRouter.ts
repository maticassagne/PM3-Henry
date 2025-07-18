import { Router } from "express";
import { registerUserController, getAllUsersController, loginUsersController, getUserById } from "../controllers/userController";

const userRouter: Router = Router();

userRouter.get("/", getAllUsersController);
userRouter.get("/:id", getUserById);
userRouter.post("/register", registerUserController);
userRouter.post("/login", loginUsersController);

export default userRouter;
