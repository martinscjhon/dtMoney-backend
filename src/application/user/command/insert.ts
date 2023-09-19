import { Repository, getRepository } from "typeorm";

import { Users } from "../../../domain/entities";
import { UserModel } from "../../../domain/models";

export class InsertUser {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async execute(payload: UserModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      try {
        const insertUser = this.repository.create();
        insertUser.Name = payload.Name;
        insertUser.Email = payload.Email;
        insertUser.Password = payload.Password;
        const result = this.repository.save(insertUser);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}
