import { AppDataSource } from "../config/data-source.ts";
import { Appointment } from "../entities/Appointments";

const AppointmentRepository = AppDataSource.getRepository(Appointment);

export default AppointmentRepository;
