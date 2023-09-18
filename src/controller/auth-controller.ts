import { Request, Response } from "express";

import { Authentication } from "../services";
import { badRequest, ok } from "../helpers";
import { ModuloError } from "../common/message";

export class AuthController {
    private service = new Authentication();

    async execute(req: Request, res: Response) {
        try {
            const { body: { Email, Password } } = req;
            console.log(Email)
            const auth = await this.service.execute(Email, Password);
            console.log("chegou", auth)
            ok(res, auth)
        } catch (error) {
            badRequest(res, ModuloError.authentication)
        }
    }
}
