import express, { Request, Response } from "express";

import { Environment } from "./environment";

export function getStartAplication() {
  const app = express();

  app.get("/health", (request: Request, response: Response) => {
    response.json({ message: "API ONLIE" });
  });

  app.use(express.json());
  app.listen(Environment.Port, () => console.log("Server in running"));
}
