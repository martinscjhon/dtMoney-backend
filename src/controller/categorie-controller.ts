import { Request, Response } from "express";

import { ok, errorDispatch } from "../helpers";
import { CategorieService } from "../services/categorie-service";

export class CategorieController {
  private service = new CategorieService();

  async create(req: Request, res: Response) {
    try {
      const { Name } = req.body;
      console.log(Name);
      const insert = await this.service.create(Name);
      ok(res, insert);
    } catch (error) {
      errorDispatch(res, error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const list = await this.service.getAll();
      ok(res, list);
    } catch (error) {
      errorDispatch(res, error);
    }
  }
}
