import { Request, Response } from "express";
import { UserService } from "services/userService";

export class UserController {
  public static async create(req: Request, res: Response) {
    try {
      await UserService.create(req, res);
    } catch (error) {
      throw Error();
    }
  }
}
