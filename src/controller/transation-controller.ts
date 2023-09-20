import { Request, Response } from "express";

import { ok, errorDispatch } from "../helpers";
import { TransationService } from "../services";

export class TransationController {
  private service = new TransationService();

  async create(req: Request, res: Response) {
    try {
      const { body } = req;
      const insert = await this.service.create(body);
      ok(res, insert);
    } catch (error) {
      errorDispatch(res, error);
    }
  }
}
