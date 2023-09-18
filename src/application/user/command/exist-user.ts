import { Repository, getRepository } from "typeorm";

import { Users } from "../../../domain/entities";

export class ExistUser {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async execute(Email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const searchUser = this.repository.find({
          where: { Email },
        });

        let result: boolean;

        if (!searchUser) result = false;
        else result = true;

        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}
