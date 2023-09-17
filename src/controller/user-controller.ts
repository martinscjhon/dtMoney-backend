import { UserService } from "../services";
import { Express, Request, Response } from "express";
import { UserModel } from "../domain/models";
import { Connection } from "typeorm";
import { ok, errorSend } from "../helpers";

export class UserController {
  public static async registerApis(app: Express, conn: Connection) {
    const controllerName = "/app";
    const service = new UserService(conn);

    app.post(
      `${controllerName}/create/user`,
      async (req: Request, res: Response) => {
        try {
          const body = req.body;
          console.log(req)
          const payload: UserModel = {
            Email: body.Email,
            Nome: body.Nome,
            Password: body.Password
          }

          console.log(payload)
          const insert = await service.create(payload)
          ok(res, insert)
        } catch (error: any) {
          errorSend(res, error)
        }
      },
    );
  }
}
