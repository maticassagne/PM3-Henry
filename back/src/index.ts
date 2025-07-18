import "reflect-metadata";
import server from "./server";
import { DBPORT, PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source.ts";

// AppDataSource.initialize().then((res) => {
//   console.log("Conexión con la base de datos exitosa");
// });
// server.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// });

const initializeApp = async () => {
  try {
    await AppDataSource.initialize().then((res) => {
      console.log(`Conexión con la base de datos exitosa, en puerto ${DBPORT}`);
    });
  } catch (error) {
    console.log(error);
  }
  server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
};
initializeApp();
