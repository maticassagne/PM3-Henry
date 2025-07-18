import { AppDataSource } from "../config/data-source.ts";
import { User } from "../entities/User";

const UserRepository = AppDataSource.getRepository(User);

export default UserRepository;
