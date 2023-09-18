import { Repository, getRepository } from "typeorm";

import { Users } from "../../../domain/entities";
import { UserModel } from "domain/models";

export class FindOneByEmailUser {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async execute(Email: string): Promise<Users> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await this.repository.findOne({
          where: { Email },
        }));
      } catch (error) {
        reject(error);
      }
    });
  }
}
