import { Connection } from "typeorm";
import { InsertUser } from "../application/user/command/insert-user";
import { UserModel } from "../domain/models";

export class UserService {
  private readonly connection: Connection;

  constructor(private conn: Connection) {
    this.connection = conn;
  }

  async create(payload: UserModel): Promise<UserModel> {
    return await new Promise(async (resolve, reject) => {
      try {
        console.log("service", payload)
        const insert = new InsertUser(this.connection);
        const result = await insert.execute(payload)
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

}
