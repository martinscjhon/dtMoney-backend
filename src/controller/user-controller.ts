import { Request, Response } from "express";

import { ModuloError } from "../common/message";
import { ok, errorDispatch } from "../helpers";
import { UserService } from "../services";

export class UserController {
  private service = new UserService();

  async create(req: Request, res: Response) {
    try {
      const {
        body: { Email, Nome, Password },
      } = req;
      const insert = await this.service.create({
        Email,
        Nome,
        Password,
      });
      ok(res, insert);
    } catch (error) {
      errorDispatch(res, ModuloError.existUser);
    }
  }
}
