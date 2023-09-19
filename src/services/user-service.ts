import { hash } from "bcrypt";

import {
  VerifyExistUserByEmail,
  InsertUser,
  FindOneUserByEmail,
} from "../application/user";
import { ModuloError } from "../common/message";
import { UserModel } from "../domain/models";

export class UserService {
  async create(payload: UserModel): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const { Email, Name, Password } = payload;

        const find = await new FindOneUserByEmail().execute(Email);

        if (find) throw new Error(ModuloError.existUser);

        resolve(
          new InsertUser().execute({
            Email,
            Name,
            Password: await hash(Password, 8),
          }),
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async verifyExistByEmail(email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        resolve(new VerifyExistUserByEmail().execute(email));
      } catch (error) {
        reject(error);
      }
    });
  }
}
