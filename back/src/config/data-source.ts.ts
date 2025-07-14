import { DBNAME, DBPORT, DBPASS, DBUSER } from "./envs";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credential } from "../entities/Credentials";
import { Pet } from "../entities/Pet";
import { Appointment } from "../entities/Appointments";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: DBPORT,
  username: DBUSER,
  password: DBPASS,
  database: DBNAME,
  // dropSchema: true,
  synchronize: true,
  logging: ["error"],
  entities: [User, Credential, Pet, Appointment],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const CredentialModel = AppDataSource.getRepository(Credential);
export const PetModel = AppDataSource.getRepository(Pet);
export const AppointmentModel = AppDataSource.getRepository(Appointment);
