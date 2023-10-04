import { Request, Response, Router } from "express";

import { CategorieController } from "../controller";
import { AuthenticationMiddleware } from "../middlewares/authentication-middleware";

const categorieRoute = Router();
const controllerName = "/categorie";
const controller = new CategorieController();

categorieRoute.post(
  `${controllerName}/create`,
  AuthenticationMiddleware,
  (req: Request, res: Response) => {
    return controller.create(req, res);
  },
);

categorieRoute.get(
  `${controllerName}/all`,
  AuthenticationMiddleware,
  (req: Request, res: Response) => {
    return controller.getAll(req, res);
  },
);

export { categorieRoute };
