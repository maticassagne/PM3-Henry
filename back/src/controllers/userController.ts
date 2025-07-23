import { Request, Response } from "express";
import { getUserByIdService, getAllUserService, createUserService, findUserByCredentialId, findUserByUsername, findUserByEmail } from "../services/userServices";
import { validateCredentialService } from "../services/credentialService";
import { User } from "../entities/User";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    // VERIFICO SI EL NOMBRE DE USUARIO EXISTE
    const foundUser = await findUserByUsername(username);
    // VERIFICO SI EL EMAIL ESTA REGISTRADO
    const foundEmail = await findUserByEmail(email);
    // CREO NUEVO USUARIO
    const newUser: User = await createUserService({ name, email, birthdate, nDni, username, password });
    res.status(201).json({
      message: `Usuario ${newUser.name} creado con exito`,
      userId: newUser.id,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
};

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getAllUserService();
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ success: false, error: error.message });
    }
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user: User = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ success: false, error: error.message });
    }
  }
};

export const loginUsersController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const credentialId: number = await validateCredentialService({ username, password });
    const user = await findUserByCredentialId(credentialId);
    res.status(200).json({
      login: true,
      message: "Login exitoso.",
      user,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
};
