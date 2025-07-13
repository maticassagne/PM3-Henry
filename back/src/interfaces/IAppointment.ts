export enum EStatus {
  ACTIVO = "Active",
  CANCELED = "Canceled",
}

export enum EService {
  Baño = "Baño y peinado",
  Corte = "Corte de pelo",
  Full = "Corte de pelo, uñas y baño",
}

export default interface IAppointments {
  id: number;
  date: string;
  time: string;
  status: EStatus;
  service: EService;
  userId: number;
}
