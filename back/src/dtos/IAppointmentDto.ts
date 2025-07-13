import { EService } from "../interfaces/IAppointment";

export default interface IAppointmentDto {
  date: string;
  time: string;
  service: EService;
}
