import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "credentials",
})
export class Credential {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;
  @Column({ name: "nombre_usuario", unique: true })
  username: string;
  @Column({ name: "pass_usuario" })
  password: string;
}
