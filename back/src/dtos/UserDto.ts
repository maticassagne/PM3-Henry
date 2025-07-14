import { Appointment } from "../entities/Appointments";
import { Pet } from "../entities/Pet";

export default interface IUserDto {
  name: string;
  email: string;
  birthdate: string;
  nDni: number;
  username: string;
  password: string;
  // pet: Pet;
  // appointment: Appointment;
}
