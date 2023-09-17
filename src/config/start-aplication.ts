import express, { Request, Response } from "express";
import { Environment } from "./environment";
import { UserController } from "../controller/user-controller";
import { Connection } from "typeorm";

export function getStartAplication(conn: Connection) {
  const app = express();

  app.get("/health", (request: Request, response: Response) => {
    response.json({ message: "API ONLIE" });
  });


  UserController.registerApis(app, conn);
  app.use(express.json());
  app.listen(Environment.Port, () => console.log("Inicialize"));
}
