import { Request, Response } from "express";
import { getUserByIdService, getAllUserService, createUserService, finUserByCredentialId } from "../services/userServices";
import IUser from "../interfaces/IUser";
import ICredential from "../interfaces/ICredentials";
import { validateCredentialService } from "../services/credentialService";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: IUser = await createUserService({ name, email, birthdate, nDni, username, password });
    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await getAllUserService();
    res.status(201).json(users);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user: IUser = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const loginUsersController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const credential: ICredential = await validateCredentialService({ username, password });
    const user = await finUserByCredentialId(credential.id);
    res.status(200).json({
      user,
      credential, //! QUITAR DESPUES, SOLO PARA PRUEBA
      login: true,
    });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
