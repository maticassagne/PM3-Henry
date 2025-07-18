import { AppDataSource } from "../config/data-source.ts";
import ICredentialDto from "../dtos/ICredentialDto";
import { Credential } from "../entities/Credentials";
import CredentialRepository from "../repositories/credentialRepo";

export const createCredentialService = async (credential: ICredentialDto): Promise<Credential> => {
  const newCredential = await CredentialRepository.create(credential);
  await CredentialRepository.save(newCredential);
  return newCredential;
};

export const validateCredentialService = async (credential: ICredentialDto): Promise<number> => {
  const credentialFound: Credential | null = await CredentialRepository.findOne({
    where: {
      username: credential.username,
      password: credential.password,
    },
  });
  if (!credentialFound) {
    throw new Error(`Usuario o contraseñas incorrectos.`);
  }
  return credentialFound.id;
};
