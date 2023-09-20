import { Repository } from "typeorm";

import { Transations } from "../../../domain/entities";

export class GetAllTransation {
  private repository: Repository<Transations>;

  async execute(UserUuid: string): Promise<Transations[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const list = await this.repository.find({
          where: { UserUuid },
        });
        resolve(list);
      } catch (error) {
        reject(error);
      }
    });
  }
}
