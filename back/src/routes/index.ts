import { Router } from "express";
import userRouters from "./userRouter";
import appointmentsRouter from "./appointmentRouter";

const router: Router = Router();

router.use("/users", userRouters);
router.use("/appointments", appointmentsRouter);

export default router;
