import { AppDataSource } from "../config/data-source.ts";
import { Pet } from "../entities/Pet";

const PetRepository = AppDataSource.getRepository(Pet);

export default PetRepository;
