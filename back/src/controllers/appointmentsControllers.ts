import { Request, Response } from "express";
import { cancelAppointmentService, createNewAppointmentService, getAllAppointmentsService, getAppointmentByIdService } from "../services/appointmentServices";
import { Appointment } from "../entities/Appointments";

export const getAllAppointmentController = async (req: Request, res: Response) => {
  try {
    const appointments: Appointment[] = await getAllAppointmentsService();
    res.status(200).json(appointments);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ error: error.message });
    }
  }
};

export const getAppointmentByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const appointmentId: Appointment = await getAppointmentByIdService(Number(id));
    res.status(200).json(appointmentId);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ error: error.message });
    }
  }
};

export const newAppointmentController = async (req: Request, res: Response) => {
  const { date, time, service, userId } = req.body;
  try {
    const newAppointment: Appointment = await createNewAppointmentService({ date, time, service, userId });
    res.status(201).json(newAppointment);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};

export const cancelAppointmentController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const findAppointment = await getAppointmentByIdService(Number(id));
    const cancelAppointment = await cancelAppointmentService(findAppointment);
    res.status(200).json({ cancelAppointment, msg: "Turno cancelado" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ error: error.message });
    }
  }
};
