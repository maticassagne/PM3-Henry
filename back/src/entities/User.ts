import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credentials";
import { Appointment } from "./Appointments";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;
  @Column({ length: 100, name: "nombre" })
  name: string;
  @Column({ name: "email", unique: true })
  email: string;
  @Column({ name: "cumpleaños" })
  birthdate: string;
  @Column({ type: "integer", name: "DNI" })
  nDni: number;
  @OneToOne(() => Credential)
  @JoinColumn({ name: "credential_id" })
  credential: Credential;
  @OneToMany(() => Appointment, (userId) => userId.userId)
  appointments: Appointment[];
}
