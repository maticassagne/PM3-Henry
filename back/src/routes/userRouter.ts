import { Router } from "express";
import { registerUserController, getAllUsersController, loginUsersController, getUserById } from "../controllers/userController";

const userRouter: Router = Router();

userRouter.get("/:id", getUserById);
userRouter.get("/", getAllUsersController);
userRouter.post("/register", registerUserController);
userRouter.post("/login", loginUsersController);

export default userRouter;
