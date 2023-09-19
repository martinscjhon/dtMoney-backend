import { hash } from "bcrypt";

import {
  VerifyExistUserByEmail,
  InsertUser,
  FindOneUserByEmail,
} from "../application/user";
import { ModuloError } from "../common/message";
import { UserModel } from "../domain/models";

export class UserService {
  async create(payload: UserModel): Promise<UserModel> {
    return new Promise(async (resolve, reject) => {
      try {
        const { Email, Nome, Password } = payload;

        const find = new FindOneUserByEmail().execute(Email);

        if (!find) {
          return ModuloError.existUser;
        }

        const passwordHash = await hash(Password, 8);
        resolve(
          new InsertUser().execute({
            Email,
            Nome,
            Password: passwordHash,
          }),
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async verifyExist(email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        resolve(new VerifyExistUserByEmail().execute(email));
      } catch (error) {
        reject(error);
      }
    });
  }
}
