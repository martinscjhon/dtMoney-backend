import { Connection } from "typeorm";
import { InsertUser } from "../application/user/command/insert-user";
import { UserModel } from "../domain/models";

export class UserService {
  async create(payload: UserModel): Promise<UserModel> {
    return await new Promise(async (resolve, reject) => {
      try {        
        const insert = new InsertUser();        
        const result = await insert.execute(payload)        
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

}
