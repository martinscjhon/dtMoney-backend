import { compare } from "bcrypt";
import { Request } from "express";
import { verify, sign } from "jsonwebtoken";

import { FindOneUserByEmail } from "../application/user";
import { UnauthorizedError } from "../common/error";
import { ModuloError } from "../common/message";
import { Environment } from "../config";
import { UserModel } from "../domain/models";
import {
  IAuthentication,
  IPayloadAuthentication,
} from "../interfaces/IAuthentication";

export class AuthenticationService {
  async execute(payload: IPayloadAuthentication) {
    const user: UserModel = await new FindOneUserByEmail().execute(
      payload.Email,
    );

    if (!user?.Email) return ModuloError.noExistUser;

    if (!(await compare(payload.Password, user.Password)))
      return ModuloError.passwordIncorrect;

    const token = sign(
      {
        Email: user.Email,
        Nome: user.Name,
        Enable: user.Enable,
        CreatedAt: user.CreatedAt,
        Uuid: user.Uuid,
      },
      Environment.SecretKeyHash,
      {
        subject: user.Uuid,
        expiresIn: "1d",
      },
    );

    const result: IAuthentication = {
      token,
      body: {
        CreatedAt: user.CreatedAt,
        Email: user.Email,
        Enable: user.Enable,
        Nome: user.Name,
        Uuid: user.Uuid,
        Id: user.Id,
      },
    };

    return result;
  }

  async userDecode(req: Request): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const token = req.headers.authorization.replace("Bearer ", "");
        const user: any = verify(
          token,
          Environment.SecretKeyHash,
          function (err: any, decoded: any) {
            if (err) throw new UnauthorizedError();
            return decoded;
          },
        );
        return resolve(user);
      } catch (error) {
        reject(new UnauthorizedError());
      }
    });
  }
}
