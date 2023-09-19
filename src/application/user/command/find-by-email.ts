import { Repository, getRepository } from "typeorm";

import { Users } from "../../../domain/entities";
import { UserModel } from "../../../domain/models";

export class FindOneByEmailUser {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async execute(Email: string): Promise<UserModel> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.repository.findOne({
          where: { Email },
        });

        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  }
}
