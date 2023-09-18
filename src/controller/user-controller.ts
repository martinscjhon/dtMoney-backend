import { Request, Response } from "express";

import { ModuloError } from "../common/message";
import { ok, errorSend, badRequest } from "../helpers";
import { UserService } from "../services";

export class UserController {
  private service = new UserService();

  async register(req: Request, res: Response) {
    try {
      const { body } = req;

      if (this.service.existUser(body.email))
        return badRequest(res, ModuloError.existUser);

      const insert = await this.service.create({
        Email: body.Email,
        Nome: body.Nome,
        Password: body.Password,
      });

      ok(res, insert);
    } catch (error) {
      errorSend(res, error);
    }
  }
}
