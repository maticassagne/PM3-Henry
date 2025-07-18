import { Router } from "express";
import { cancelAppointmentController, getAppointmentByIdController, getAllAppointmentController, newAppointmentController } from "../controllers/appointmentsControllers";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAllAppointmentController);
appointmentsRouter.get("/:id", getAppointmentByIdController);
appointmentsRouter.post("/schedule", newAppointmentController);
appointmentsRouter.put("/cancel/:id", cancelAppointmentController);

export default appointmentsRouter;
