import { ExistUser, InsertUser } from "../application";
import { UserModel } from "../domain/models";

export class UserService {
  async create(payload: UserModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      try {
        const insert = new InsertUser().execute(payload);
        resolve(insert);
      } catch (error) {
        reject(error);
      }
    });
  }

  async existUser(email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const verify = new ExistUser().execute(email);
        resolve(verify);
      } catch (error) {
        reject(error);
      }
    });
  }
}
