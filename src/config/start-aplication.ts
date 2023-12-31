import express, { Request, Response } from "express";

import { startCors } from "../middlewares/cors";
import {
  userRoute,
  authRoute,
  transationRoute,
  categorieRoute,
} from "../router";
import { Environment } from "./environment";

import "../domain";

export function getStartAplication() {
  const app = express();
  startCors(app);
  app.use(express.json());

  app.get("/health", (request: Request, response: Response) => {
    response.json({ message: "API ONLIE" });
  });

  app.use(userRoute);
  app.use(authRoute);
  app.use(transationRoute);
  app.use(categorieRoute);
  app.listen(Environment.Port, () => console.log("Inicialize"));
}
