import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source.ts";

AppDataSource.initialize().then((res) => {
  console.log("Conexión con la base de datos exitosa");
  server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
});

// server.listen(PORT, () => {
// console.log(`Server ready on port ${PORT}`);
// });
