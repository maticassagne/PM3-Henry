import { Router } from "express";
import { cancelAppointmentController, getAppointmentByIdController, getAllAppointmentController, newAppointmentController } from "../controllers/appointmentsControllers";
import { validateAppointmentMiddleware } from "../middlewares/appointmentMiddleware";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAllAppointmentController);
appointmentsRouter.get("/:id", getAppointmentByIdController);
appointmentsRouter.post("/schedule", validateAppointmentMiddleware, newAppointmentController);
appointmentsRouter.put("/cancel/:id", cancelAppointmentController);

export default appointmentsRouter;
