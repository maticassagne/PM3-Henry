import { UserModel } from "../config/data-source.ts";
import IUserDto from "../dtos/UserDto";
import IUser from "../interfaces/IUser";
import { createCredentialService } from "./credentialService";

const users: IUser[] = [
  {
    id: 1,
    name: "Homer Simpson",
    email: "homer.simpson@springfield.com",
    birthdate: "1956-05-12",
    nDni: 74274274,
    credential_id: 1,
  },
  {
    id: 2,
    name: "Marge Simpson",
    email: "marge.simpson@springfield.com",
    birthdate: "1956-03-19",
    nDni: 85385385,
    credential_id: 2,
  },
  {
    id: 3,
    name: "Bart Simpson",
    email: "bart.simpson@springfield.com",
    birthdate: "1980-04-01",
    nDni: 12345678,
    credential_id: 3,
  },
  {
    id: 4,
    name: "Lisa Simpson",
    email: "lisa.simpson@springfield.com",
    birthdate: "1982-05-09",
    nDni: 23456789,
    credential_id: 4,
  },
  {
    id: 5,
    name: "Ned Flanders",
    email: "ned.flanders@springfield.com",
    birthdate: "1959-08-14",
    nDni: 34567890,
    credential_id: 5,
  },
];

let id: number = 10;

export const getAllUserService = async () => {
  const allUser = await UserModel.find();
  return allUser;
};

export const getUserByIdService = async (id: number) => {
  const userFound: IUser | undefined = users.find((user) => user.id === id);
  if (!userFound) {
    throw Error(`No se encontró el usario con el Id: ${id}`);
  }
  return userFound;
};

export const createUserService = async (userDto: IUserDto): Promise<IUser> => {
  const { name, email, birthdate, nDni, username, password } = userDto;
  //   CREA LA CREDENCIAL
  const newCredential = await createCredentialService({ username, password });
  //   CREA USUARIO
  const newUser: IUser = {
    id: id++,
    name,
    email,
    birthdate,
    nDni,
    credential_id: newCredential.id,
  };
  users.push(newUser);
  return newUser;
};

export const deleteUserByIdService = async () => {};

export const finUserByCredentialId = async (credentialId: number) => {
  const user: IUser | undefined = users.find((user) => user.id === credentialId);
  return user;
};
