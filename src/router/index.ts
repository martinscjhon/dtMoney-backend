import { UserController } from "../controller/user-controller";
import express, { Request, Response, Router } from "express";

const router = Router();
const controllerName = "/app"

router.post(`${controllerName}/create/user`, (req: Request, res: Response) => {
    return new UserController().register(req, res);
});


export { router };
