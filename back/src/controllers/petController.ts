import { Request, Response } from "express";
import { createPetService, deletePetService, getAllPetsService, getPetByIdService } from "../services/petService";
import { Pet } from "../entities/Pet";

export const createPetController = async (req: Request, res: Response) => {
  try {
    const { name, birthdate, breed, userId } = req.body;
    const newPet = await createPetService({ name, birthdate, breed, userId });
    res.status(201).json(newPet);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};

export const getPetByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const pet = await getPetByIdService(Number(id));
    res.status(200).json(pet);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ error: error.message });
    }
  }
};
export const getAllPetsController = async (req: Request, res: Response) => {
  try {
    const allPets: Pet[] = await getAllPetsService();
    res.status(200).json(allPets);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ error: error.message });
    }
  }
};

export const deletePetController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const petFound = await getPetByIdService(Number(id));
    const petDelete = await deletePetService(petFound.id);
    res.status(410).json(`Masconta con Id: ${petFound.id} eliminada exitosamente`);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};
