import { CredentialModel } from "../config/data-source.ts";
import ICredentialDto from "../dtos/ICredentialDto";
import { Credential } from "../entities/Credentials";

export const createCredentialService = async (credential: ICredentialDto): Promise<Credential> => {
  const { username, password } = credential;
  const newCredential: Credential = CredentialModel.create({
    username,
    password,
  });
  const save = await CredentialModel.save(newCredential);
  return newCredential;
};

export const validateCredentialService = async (credential: ICredentialDto): Promise<number> => {
  const credentialFound: Credential | null = await CredentialModel.findOne({
    where: {
      username: credential.username,
      password: credential.password,
    },
  });
  if (!credentialFound) {
    throw Error();
  }
  return credentialFound.id;
};
