import { Router } from "express";
import { cancelAppointmentController, getAppointmentByIdController, getAppointmentController, newAppointmentController } from "../controllers/appointmentsControllers";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAppointmentController);
appointmentsRouter.get("/:id", getAppointmentByIdController);
appointmentsRouter.post("/schedule", newAppointmentController);
appointmentsRouter.put("/cancel", cancelAppointmentController);

export default appointmentsRouter;
