import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credentials";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn({ name: "Id" })
  id: number;
  @Column({ length: 100, name: "Nombre" })
  name: string;
  @Column({ name: "Email" })
  email: string;
  @Column({ name: "Cumpleaños" })
  birthdate: string;
  @Column({ type: "integer", name: "DNI" })
  nDni: number;
  @OneToOne(() => Credential)
  @JoinColumn()
  credential: Credential;
}
