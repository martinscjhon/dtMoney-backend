import { Request, Response, Router } from "express";

import { TransationController } from "../controller";
import { AuthenticationMiddleware } from "../middlewares/authentication-middleware";

const transationRoute = Router();
const controllerName = "/transation";
const controller = new TransationController();

transationRoute.post(
  `${controllerName}/create`,
  AuthenticationMiddleware,
  (req: Request, res: Response) => {
    return controller.create(req, res);
  },
);

transationRoute.get(
  `${controllerName}/list`,
  AuthenticationMiddleware,
  (req: Request, res: Response) => {
    return controller.getAllByUserUuid(req, res);
  },
);

transationRoute.get(
  `${controllerName}/resume`,
  AuthenticationMiddleware,
  (req: Request, res: Response) => {
    return controller.getResumeValues(req, res);
  },
);

export { transationRoute };
