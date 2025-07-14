import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source.ts";
import { preLoad } from "./config/helpers/preLoadDB";

// AppDataSource.initialize().then((res) => {
//   console.log("Conexión con la base de datos exitosa");
// });
// server.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// });

const initializeApp = async () => {
  await AppDataSource.initialize().then((res) => {
    console.log("Conexión con la base de datos exitosa");
  });
  // await preLoad();
  server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
};
initializeApp();
