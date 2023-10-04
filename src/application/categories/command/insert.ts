import { Repository, getRepository } from "typeorm";

import { Categories } from "../../../domain/entities";
import { CategoriesModel } from "../../../domain/models";

export class InsertCategorie {
  private repository: Repository<Categories>;

  constructor() {
    this.repository = getRepository(Categories);
  }

  async execute(name: string): Promise<CategoriesModel> {
    return new Promise((resolve, reject) => {
      try {
        const insertCategorie = this.repository.create();
        insertCategorie.Name = name;
        const result = this.repository.save(insertCategorie);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}
