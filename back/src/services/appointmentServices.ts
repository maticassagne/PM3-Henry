import IAppointmentDto from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Appointments";
import { Pet } from "../entities/Pet";
import { User } from "../entities/User";
import { EStatus } from "../interfaces/IAppointment";
import AppointmentRepository from "../repositories/appointmentsRepo";
import { getPetByIdService } from "./petService";
import { getUserByIdService } from "./userServices";

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  const allApointments = await AppointmentRepository.find();
  return allApointments;
};

export const getAppointmentByIdService = async (id: number): Promise<Appointment> => {
  const appointmentFound = await AppointmentRepository.findOneBy({ id });
  if (!appointmentFound) {
    throw new Error(`No se encontró la cita con Id: ${id}`);
  }
  return appointmentFound;
};

export const createNewAppointmentService = async (data: IAppointmentDto): Promise<Appointment> => {
  const { date, time, service, userId, petId } = data;
  const userFound: User = await getUserByIdService(userId);
  const petFound: Pet = await getPetByIdService(petId);
  const newAppointment: Appointment = await AppointmentRepository.create({ date, time, service });
  newAppointment.userId = userFound;
  newAppointment.status = EStatus.ACTIVO;
  newAppointment.petId = petFound;
  await AppointmentRepository.save(newAppointment);
  return newAppointment;
};

export const cancelAppointmentService = async (data: Appointment): Promise<Appointment> => {
  if (data.status === EStatus.CANCELED) {
    throw new Error("El turno ya se encuentra cancelado");
  }
  data.status = EStatus.CANCELED;
  await AppointmentRepository.save(data);
  return data;
};
