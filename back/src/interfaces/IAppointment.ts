export enum EStatus {
  ACTIVO = "Active",
  CANCELED = "Canceled",
}

export enum EService {
  CONSULTA = "Consulta",
  CONTROL = "Control",
  ESTUDIOS = "Estudios",
}

export default interface IAppointments {
  date: string;
  time: string;
  status: EStatus;
  service: EService;
  userId: number;
}
