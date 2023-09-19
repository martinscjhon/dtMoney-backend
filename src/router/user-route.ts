import { Request, Response, Router } from "express";

import { UserController } from "../controller";
import { AuthenticationMiddleware } from "../middlewares/authentication-middleware";

const userRoute = Router();
const controllerName = "/user";
const service = new UserController();

userRoute.post(`${controllerName}/create`, (req: Request, res: Response) => {
  return service.create(req, res);
});

userRoute.get(
  `${controllerName}/info`,
  AuthenticationMiddleware,
  (req: Request, res: Response) => {
    return service.info(req, res);
  },
);

export { userRoute };
