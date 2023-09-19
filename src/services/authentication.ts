import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { FindOneByEmailUser } from "../application/user";
import { ModuloError } from "../common/message";
import { Environment } from "../config";
import { UserModel } from "../domain/models";
import {
  IAuthentication,
  IPayloadAuthentication,
} from "../interfaces/IAuthentication";

export class Authentication {
  async execute(payload: IPayloadAuthentication) {
    const user: UserModel = await new FindOneByEmailUser().execute(
      payload.Email,
    );

    if (!user?.Email) return ModuloError.noExistUser;

    if (!(await compare(payload.Password, user.Password)))
      return ModuloError.passwordIncorrect;

    const token = sign(
      { Nome: user.Nome, Email: user.Email },
      Environment.Hash,
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
        Nome: user.Nome,
        Uuid: user.Uuid,
        Id: user.Id,
      },
    };

    return result;
  }
}
