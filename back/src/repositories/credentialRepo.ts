import { AppDataSource } from "../config/data-source.ts";
import { Credential } from "../entities/Credentials";

const CredentialRepository = AppDataSource.getRepository(Credential);

export default CredentialRepository;
