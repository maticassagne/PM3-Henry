import { EService, EStatus } from "../interfaces/IAppointment";

export default interface IAppointmentDto {
  date: string;
  time: string;
  service: EService;
  userId: number;
}
