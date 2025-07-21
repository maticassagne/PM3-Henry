import { Router } from "express";
import { registerUserController, getAllUsersController, loginUsersController, getUserById } from "../controllers/userController";
import { validateUser } from "../middlewares/authMiddleware";

const userRouter: Router = Router();

userRouter.get("/", getAllUsersController);
userRouter.get("/:id", getUserById);
userRouter.post("/register", validateUser, registerUserController);
userRouter.post("/login", loginUsersController);

export default userRouter;
