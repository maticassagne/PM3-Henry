import express, { Request, Response } from "express";
import router from "./routes";
import cors from "cors";
import morgan from "morgan";

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use(router);

export default server;
