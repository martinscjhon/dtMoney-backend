import { Request, Response } from "express";

import { ok, errorDispatch } from "../helpers";
import { AuthenticationService, TransationService } from "../services";

export class TransationController {
  private service = new TransationService();
  private serviceAuth = new AuthenticationService();

  async create(req: Request, res: Response) {
    try {
      const { body } = req;

      const auth = await this.serviceAuth.userDecode(req);

      const insert = await this.service.create(body, auth);

      ok(res, insert);
    } catch (error) {
      errorDispatch(res, error);
    }
  }
}
