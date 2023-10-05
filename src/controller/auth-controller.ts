import { Request, Response } from "express";

import { badRequest, ok } from "../helpers";
import { AuthenticationService } from "../services";

export class AuthController {
  private service = new AuthenticationService();

  async execute(req: Request, res: Response) {
    try {
      const {
        body: { Email, Password },
      } = req;
      const auth = await this.service.execute({ Email, Password });
      ok(res, auth);
    } catch (error: any) {
      badRequest(res, error?.message);
    }
  }
}
