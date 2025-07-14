import { User } from "../../entities/User.js";
import IUser from "../../interfaces/IUser.js";
import { AppDataSource, UserModel } from "../data-source.ts";

const user1: User = {
  name: "Homer Simpson",
  email: "homer.simpson@springfield.com",
  birthdate: "1956-05-12",
  nDni: 12345678,
  credential: 1,
};
const user2: User = {
  name: "Marge Simpson",
  email: "marge.simpson@springfield.com",
  birthdate: "1958-03-19",
  nDni: 23456789,
  credential: 2,
};
const user3: User = {
  name: "Bart Simpson",
  email: "bart.simpson@springfield.com",
  birthdate: "2005-04-01",
  nDni: 34567890,
  credential: 3,
};
const user4: User = {
  name: "Lisa Simpson",
  email: "lisa.simpson@springfield.com",
  birthdate: "2007-05-09",
  nDni: 45678901,
  credential: 4,
};
const user5: User = {
  name: "Maggie Simpson",
  email: "maggie.simpson@springfield.com",
  birthdate: "2020-11-16",
  nDni: 56789012,
  credential: 5,
};

export const preLoad = async () => {
  await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
    const newUser1 = await UserModel.create(user1);
    const newUser2 = await UserModel.create(user2);
    const newUser3 = await UserModel.create(user3);
    const newUser4 = await UserModel.create(user4);
    const newUser5 = await UserModel.create(user5);

    await transactionalEntityManager.save(newUser1);
    await transactionalEntityManager.save(newUser2);
    await transactionalEntityManager.save(newUser3);
    await transactionalEntityManager.save(newUser4);
    await transactionalEntityManager.save(newUser5);

    console.log("Precarga de datos exitosa.");
  });
};
