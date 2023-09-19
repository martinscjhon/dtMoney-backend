import { Request, Response, Router } from "express";

import { UserController } from "../controller";

const userRoute = Router();
const controllerName = "/user";

userRoute.post(`${controllerName}/create`, (req: Request, res: Response) => {
  return new UserController().create(req, res);
});

// userRoute.get(`${controllerName}/teste`, AuthenticationMiddleware,async (req: Request, res: Response) => {
//   const user = await new AuthenticationService().userDecode(req)
//   ok(res, user)
// });

export { userRoute };
