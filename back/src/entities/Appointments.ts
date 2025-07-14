import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EService, EStatus } from "../interfaces/IAppointment";

@Entity({
  name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: string;
  @Column()
  time: string;
  @Column()
  status: EStatus;
  @Column()
  service: EService;
  @Column()
  userId: number;
}
