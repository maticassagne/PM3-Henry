import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EBreed } from "../interfaces/IPet";

@Entity({
  name: "pets",
})
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  birthdate: string;
  @Column()
  breed: EBreed;
  @Column()
  userId: number;
}
