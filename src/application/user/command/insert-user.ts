import { Users } from "../../../domain/entities";
import { UserModel } from "../../../domain/models";
import { Repository, getRepository, Connection } from "typeorm";

export class InsertUser {
  private repository: Repository<Users>;

  constructor(private conn: Connection) {
    this.repository = conn.getRepository(Users);
  }

  async execute(payload: UserModel): Promise<UserModel> {
    return new Promise(async (resolve, reject) => {
      try {        
        const insertUser = this.repository.create();
        insertUser.Nome = payload.Nome;
        insertUser.Email = payload.Email;
        insertUser.Password = payload.Password;        
        const result = await this.repository.save(insertUser);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}
