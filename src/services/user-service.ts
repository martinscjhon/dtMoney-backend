import { InsertUser } from "../application/user/command/insert-user";
import { UserModel } from "../domain/models";

export class UserService {
  async create(payload: UserModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      try {
        const insert = new InsertUser();
        const result = insert.execute(payload);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}
