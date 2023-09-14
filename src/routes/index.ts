import { UserController } from "controller/userController";
import { Request, Response, Router } from "express";

const app = Router();
const controllerName = "app";

app.post(
  `${controllerName}/create/user`,
  async (req: Request, res: Response) => {
    await UserController.create(req, res);
  },
);

export default app;
