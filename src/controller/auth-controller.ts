import { Request, Response } from "express";

import { ok } from "../helpers";
import { AuthenticationService } from "../services";

export class AuthController {
  private service = new AuthenticationService();

  async execute(req: Request, res: Response) {
    const {
      body: { Email, Password },
    } = req;
    const auth = await this.service.execute({ Email, Password });
    ok(res, auth);
  }
}
