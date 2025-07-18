import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EBreed } from "../interfaces/IPet";
import { User } from "./User";
import { Appointment } from "./Appointments";

@Entity({
  name: "pets",
})
export class Pet {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;
  @Column({ name: "nombre_mascota" })
  name: string;
  @Column({ name: "nacimiento_mascota" })
  birthdate: string;
  @Column({ name: "raza", default: EBreed.Other })
  breed: EBreed;
  @ManyToOne(() => User, (pets) => pets.pets)
  @JoinColumn({ name: "dueno" })
  userId: number;
  @OneToMany(() => Appointment, (id) => id.petId)
  petAppointments: Appointment[];
}
