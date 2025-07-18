import IPetDto from "../dtos/IPetDto";
import { Pet } from "../entities/Pet";
import PetRepository from "../repositories/petsRepo";
import { getUserByIdService } from "./userServices";

export const createPetService = async (pet: IPetDto): Promise<Pet> => {
  const user = await getUserByIdService(pet.userId);
  const newPet = await PetRepository.create(pet);
  newPet.userId = user.id;
  const save = await PetRepository.save(newPet);
  return newPet;
};

export const getPetByIdService = async (id: number): Promise<Pet> => {
  const petFound = await PetRepository.findOneBy({ id });
  if (!petFound) {
    throw new Error(`Mascota con Id: ${id} inexistente`);
  }
  return petFound;
};

export const getAllPetsService = async (): Promise<Pet[]> => {
  const allPets = await PetRepository.find({
    relations: { petAppointments: true },
  });
  return allPets;
};

export const deletePetService = async (id: number): Promise<void> => {
  const petFound = await PetRepository.delete(id);
  return;
};
