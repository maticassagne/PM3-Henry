import ICredentialDto from "../dtos/ICredentialDto";
import ICredential from "../interfaces/ICredentials";

const credentials: ICredential[] = [];
let credentialId: number = 10;

export const createCredentialService = async (credentialDto: ICredentialDto): Promise<ICredential> => {
  const { username, password } = credentialDto;
  const newCredential = {
    id: credentialId,
    username,
    password,
  };
  credentials.push(newCredential);
  return newCredential;
};

export const validateCredentialService = (credentialDto: ICredentialDto) => {
  const { username, password } = credentialDto;
  const foundCredential: ICredential | undefined = credentials.find((credential) => credential.username === username);
  if (!foundCredential) throw Error("Credenciales incorrectas");
  if (password !== credentialDto.password) {
    throw Error("Credenciales Incorrectas");
  }
  return foundCredential;
};
