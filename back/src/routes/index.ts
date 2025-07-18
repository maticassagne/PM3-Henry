import { Router } from "express";
import userRouters from "./userRouter";
import appointmentsRouter from "./appointmentRouter";
import petRouter from "./petRouter";

const router: Router = Router();

router.use("/users", userRouters);
router.use("/appointments", appointmentsRouter);
router.use("/pets", petRouter);

export default router;
