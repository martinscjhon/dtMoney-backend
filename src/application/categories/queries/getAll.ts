import { getConnection } from "typeorm";

import { Categories } from "../../../domain/entities";

export class GetAllCategories {
  async execute(): Promise<Categories[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const queryRunner = await getConnection().createQueryRunner();
        await queryRunner.startTransaction();
        const sql = "SELECT * FROM categories c WHERE c.Enable = true";
        const categories = queryRunner.query(sql);
        resolve(categories);
      } catch (error) {
        reject(error);
      }
    });
  }
}
