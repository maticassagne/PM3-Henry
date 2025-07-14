import { Request, Response } from "express";
import { getUserByIdService, getAllUserService, createUserService, findUserByCredentialId } from "../services/userServices";
import { validateCredentialService } from "../services/credentialService";
import { User } from "../entities/User";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: User = await createUserService({ name, email, birthdate, nDni, username, password });
    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(404).json({ msg: "El usuario ya existe" });
  }
};

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getAllUserService();
    res.status(201).json(users);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user: User = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const loginUsersController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const credentialId: number = await validateCredentialService({ username, password });
    const user = await findUserByCredentialId(credentialId);
    res.status(200).json({
      user,
      login: true,
    });
  } catch (error: any) {
    res.status(404).json({ msg: "Credenciales Incorrectas" });
  }
};
