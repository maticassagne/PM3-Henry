import { Router } from "express";
import { createPetController, deletePetController, getAllPetsController, getPetByIdController } from "../controllers/petController";

const petRouter: Router = Router();

petRouter.get("/:id", getPetByIdController);
petRouter.get("/", getAllPetsController);
petRouter.post("/new", createPetController);
petRouter.delete("/delete/:id", deletePetController);

export default petRouter;
