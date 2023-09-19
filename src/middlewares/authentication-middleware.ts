import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { FindOneUserByUuid } from "../application/user";
import { ModuloError } from "../common/message";
import { Environment } from "../config";
import { UserModel } from "../domain/models";
import { unauthorized, errorDispatch } from "../helpers";

export async function AuthenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return unauthorized(res);

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_uuid } = verify(token, Environment.SecretKeyHash);

    const user: UserModel = await new FindOneUserByUuid().execute(
      String(user_uuid),
    );

    if (!user) throw new Error(ModuloError.noExistUser);

    next();
  } catch (error) {
    errorDispatch(res, error);
  }
}
