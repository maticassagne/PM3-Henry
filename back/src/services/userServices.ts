import { CredentialModel, UserModel } from "../config/data-source.ts";
import IUserDto from "../dtos/UserDto";
import { User } from "../entities/User.js";
import { createCredentialService, validateCredentialService } from "./credentialService";

export const getAllUserService = async (): Promise<User[]> => {
  const allUser = await UserModel.find();
  return allUser;
};

export const getUserByIdService = async (id: number): Promise<User> => {
  const userFound: User | null = await UserModel.findOneBy({ id });
  if (!userFound) {
    throw Error(`No se encontró el usario con el Id: ${id}`);
  }
  return userFound;
};

export const createUserService = async (user: IUserDto): Promise<User> => {
  const { name, email, birthdate, nDni, username, password } = user;
  //   Verificar si existe el usuario
  const userFound = await findUserByUsername(username);
  //   Crear credenciales
  const newCredential = await createCredentialService({ username, password });
  //   CREA USUARIO
  const newUser: User = UserModel.create({
    name,
    email,
    birthdate,
    nDni,
    // pet,
    // appointment
  });
  newUser.credential = newCredential;
  const save = await UserModel.save(newUser);
  return newUser;
};

export const deleteUserByIdService = async () => {};

export const findUserByCredentialId = async (credentialId: number): Promise<User> => {
  const userFound: User | null = await UserModel.findOneBy({ id: credentialId });
  if (!userFound) {
    throw Error("Usuario no encontrado");
  }
  return userFound;
};

export const findUserByUsername = async (username: string) => {
  const userFounded = await CredentialModel.findOneBy({ username });
  if (userFounded) throw Error();
};
