import { Request, Response } from "express";

import { ModuloError } from "../common/message";
import { ok, errorDispatch } from "../helpers";
import { AuthenticationService, UserService } from "../services";

export class UserController {
  private service = new UserService();
  private auth = new AuthenticationService();

  async create(req: Request, res: Response) {
    try {
      const { body } = req;
      const insert = await this.service.create(body);
      ok(res, insert);
    } catch (error) {
      errorDispatch(res, error);
    }
  }

  async info(req: Request, res: Response) {
    try {
      const userInfo = await this.auth.userDecode(req);
      ok(res, userInfo);
    } catch (error) {
      errorDispatch(res, ModuloError.existUser);
    }
  }
}
