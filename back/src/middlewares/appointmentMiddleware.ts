import { Request, Response, NextFunction } from "express";
import { EService } from "../interfaces/IAppointment";
import AppointmentRepository from "../repositories/appointmentsRepo";

export const validateAppointmentMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { date, time, service, userId } = req.body;

  if (!date || isNaN(Date.parse(date))) {
    return res.status(400).json({ error: "La fecha proporcionada no es válida." });
  }

  const appointmentDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (appointmentDate < today) {
    return res.status(400).json({ error: "La fecha no puede ser anterior a hoy." });
  }

  const dayOfWeek = appointmentDate.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return res.status(400).json({ error: "Las citas solo pueden ser de lunes a viernes." });
  }

  const timeRegex = /^([01]\d|2[0-3]):(00|30)$/;
  if (!time || !timeRegex.test(time)) {
    return res.status(400).json({
      error: "El horario debe tener formato HH:mm, dentro del rango de las 09hs a 19hs y estar en intervalos de 30 minutos.",
    });
  }

  const [hour, minute] = time.split(":").map(Number);
  const totalMinutes = hour * 60 + minute;
  const startTime = 9 * 60; // 09:00
  const endTime = 19 * 60; // 19:00

  if (totalMinutes < startTime || totalMinutes > endTime) {
    return res.status(400).json({
      error: "El horario debe estar entre las 09:00 y las 19:00 hs.",
    });
  }

  const validServices = Object.values(EService);
  if (!validServices.includes(service)) {
    return res.status(400).json({
      error: `El servicio '${service}' no se encuentra disponible. Debe seleccionar uno de los siguientes servicios: -Consulta-Control-Estudios`,
    });
  }

  if (!userId) {
    return res.status(400).json({ error: "Se requiere el ID de usuario para agendar la cita." });
  }

  const existingAppointment = await AppointmentRepository.findOne({
    where: {
      userId: { id: userId }, // si user es una relación
      date,
      time,
    },
    relations: ["userId"], // necesario para hacer la comparación por ID
  });

  if (existingAppointment) {
    return res.status(400).json({
      error: "Ya existe una cita para este usuario en la misma fecha y horario.",
    });
  }

  next();
};
