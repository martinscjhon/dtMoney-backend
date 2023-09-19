import { Request, Response } from "express";

import { ok } from "../helpers";
import { Authentication } from "../services";

export class AuthController {
  private service = new Authentication();

  async execute(req: Request, res: Response) {
    const {
      body: { Email, Password },
    } = req;
    const auth = await this.service.execute({ Email, Password });
    ok(res, auth);
  }
}
