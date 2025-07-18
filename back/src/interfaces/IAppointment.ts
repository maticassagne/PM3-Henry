export enum EStatus {
  ACTIVO = "Active",
  CANCELED = "Canceled",
}

export enum EService {
  BANO = "Baño",
  CORTE = "Corte",
  FULL = "Full",
}

export default interface IAppointments {
  date: string;
  time: string;
  status: EStatus;
  service: EService;
  userId: number;
}
