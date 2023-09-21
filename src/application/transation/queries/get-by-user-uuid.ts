import { getConnection } from "typeorm";

import { Transations } from "../../../domain/entities";

export class GetAllByUserUuid {
  async execute(UserUuid: string): Promise<Transations[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const queryRunner = await getConnection().createQueryRunner();
        await queryRunner.startTransaction();
        const sql = `SELECT * FROM transations t WHERE t.UserUuid = "${UserUuid}"`
        const transations = queryRunner.query(sql);
        resolve(transations);
      } catch (error) {
        reject(error);
      }
    });
  }
}
