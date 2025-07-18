import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EService, EStatus } from "../interfaces/IAppointment";
import { User } from "./User";
import { Pet } from "./Pet";

@Entity({
  name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;
  @Column({ name: "dia" })
  date: string;
  @Column({ name: "hora" })
  time: string;
  @Column({ name: "estado", default: EStatus.ACTIVO })
  status: EStatus;
  @Column({ name: "servicio", default: EService.CORTE })
  service: EService;
  @ManyToOne(() => User, (Appointments) => Appointments.appointments)
  @JoinColumn({ name: "usuario" })
  userId: User;
  @ManyToOne(() => Pet, (Appointments) => Appointments.petAppointments)
  @JoinColumn({ name: "mascota" })
  petId: Pet;
}
