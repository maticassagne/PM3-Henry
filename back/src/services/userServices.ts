import { AppDataSource } from "../config/data-source.ts";
import IUserDto from "../dtos/UserDto";
import { User } from "../entities/User";
import CredentialRepository from "../repositories/credentialRepo";
import UserRepository from "../repositories/usersRepo";
import { createCredentialService } from "./credentialService";

export const getAllUserService = async (): Promise<User[]> => {
  const allUser = await UserRepository.find({
    relations: { appointments: true, pets: true },
  });
  return allUser;
};

export const getUserByIdService = async (id: number): Promise<User> => {
  const userFound: User | null = await UserRepository.findOne({
    where: { id },
    relations: { appointments: true, pets: true },
  });
  if (!userFound) {
    throw new Error(`No se encontró el usario con el Id: ${id}`);
  }
  return userFound;
};

export const createUserService = async (user: IUserDto): Promise<User> => {
  const { name, email, birthdate, nDni, username, password } = user;
  //   Crear credenciales
  const newCredential = await createCredentialService({ username, password });
  //   CREA USUARIO
  const newUser: User = UserRepository.create({ name, email, birthdate, nDni });
  await UserRepository.save(newUser);
  newUser.credential = newCredential;
  await UserRepository.save(newUser);
  return newUser;
};

export const findUserByCredentialId = async (credentialId: number): Promise<User> => {
  const userFound: User | null = await UserRepository.findOneBy({ id: credentialId });
  if (!userFound) {
    throw new Error("Usuario no encontrado.");
  }
  return userFound;
};

export const findUserByUsername = async (username: string): Promise<void> => {
  const userFounded = await CredentialRepository.findOneBy({ username });
  if (userFounded) throw new Error(`El usuario ${username} ya se encuentra registrado.`);
};

export const findUserByEmail = async (email: string): Promise<void> => {
  const mailFounded = await UserRepository.findOneBy({ email });
  if (mailFounded) {
    throw new Error(`El email ${email}, ya se encuentra registrado.`);
  }
};
