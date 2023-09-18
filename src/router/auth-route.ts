import { AuthController } from "../controller";
import { Request, Response, Router } from "express";

const authRoute = Router();
const controllerName = "/app";

authRoute.post(`${controllerName}/login`, (req: Request, res: Response) => {  
  return new AuthController().execute(req, res)
});

export { authRoute };
