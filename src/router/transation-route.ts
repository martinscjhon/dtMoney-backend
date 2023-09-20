import { Request, Response, Router } from "express";

import { TransationController } from "../controller";
import { AuthenticationMiddleware } from "../middlewares/authentication-middleware";

const transationRoute = Router();
const controllerName = "/transation";
const service = new TransationController();

transationRoute.post(
  `${controllerName}/create`,
  AuthenticationMiddleware,
  (req: Request, res: Response) => {
    return service.create(req, res);
  },
);

export { transationRoute };
