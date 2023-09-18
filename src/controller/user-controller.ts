import { Request, Response } from "express";

import { ok, errorSend } from "../helpers";
import { UserService } from "../services";

export class UserController {
  private service = new UserService();

  async register(req: Request, res: Response) {
    try {
      const { body } = req;
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
