import { Request, Response, Router } from "express";

import { AuthController } from "../controller";

const authRoute = Router();
const controllerName = "/app";
const service = new AuthController();

authRoute.post(`${controllerName}/login`, (req: Request, res: Response) => {
  return service.execute(req, res);
});

export { authRoute };
