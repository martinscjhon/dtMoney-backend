import { GetAllCategories, InsertCategorie } from "../application/categories";
import { CategoriesModel } from "../domain/models";

export class CategorieService {
  async create(name: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await new InsertCategorie().execute(name));
      } catch (error) {
        reject(error);
      }
    });
  }

  async getAll(): Promise<CategoriesModel[]> {
    return new Promise((resolve, reject) => {
      try {
        resolve(new GetAllCategories().execute());
      } catch (error) {
        reject(error);
      }
    });
  }
}
