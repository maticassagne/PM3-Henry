import { DBNAME, DBPORT, DBPASS, DBUSER } from "./envs";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credential } from "../entities/Credentials";
import { Appointment } from "../entities/Appointments";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: DBPORT,
  username: DBUSER,
  password: DBPASS,
  database: DBNAME,
  dropSchema: false,
  synchronize: false,
  logging: ["error"],
  entities: [User, Credential, Appointment],
  subscribers: [],
  migrations: [],
});
