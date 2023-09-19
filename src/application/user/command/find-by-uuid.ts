import { Repository, getRepository } from "typeorm";

import { Users } from "../../../domain/entities";
import { UserModel } from "../../../domain/models";

export class FindOneUserByUuid {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async execute(Uuid: string): Promise<UserModel> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.repository.findOne({
          where: { Uuid },
        });

        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  }
}
