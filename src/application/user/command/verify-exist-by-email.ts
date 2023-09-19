import { Repository, getRepository } from "typeorm";

import { Users } from "../../../domain/entities";

export class VerifyExistUserByEmail {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async execute(Email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const searchUser = this.repository.findOne({
          where: { Email },
        });

        if (!searchUser) resolve(false);

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }
}
