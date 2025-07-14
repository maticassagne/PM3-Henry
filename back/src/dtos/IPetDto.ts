import { EBreed } from "../interfaces/IPet";

export default interface IPetDto {
  name: string;
  birthdate: string;
  breed: EBreed;
  userId: number;
}
