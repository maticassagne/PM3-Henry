import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { DBNAME, DBPORT, DBPASS, DBUSER } from "./envs";

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
  entities: [User],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
