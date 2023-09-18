import express, { Request, Response } from "express";

import { Environment } from "./environment";
import "../domain";
import { userRoute, authRoute } from "../router";

export function getStartAplication() {
  const app = express();
  app.use(express.json());

  app.get("/health", (request: Request, response: Response) => {
    response.json({ message: "API ONLIE" });
  });

  app.use(userRoute);
  app.use(authRoute);
  
  app.listen(Environment.Port, () => console.log("Inicialize"));
}
