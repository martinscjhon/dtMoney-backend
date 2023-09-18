import { ModuloError } from "../common/message";
import { VerifyExistUser, InsertUser, FindOneByEmailUser } from "../application/user";
import { UserModel } from "../domain/models";
import { hash } from 'bcrypt'

export class UserService {
  async create(payload: UserModel): Promise<UserModel> {
    return new Promise(async (resolve, reject) => {
      try {
        const { Email, Nome, Password } = payload;

        const find = new FindOneByEmailUser().execute(Email);

        if (!find) {
          return ModuloError.existUser
        }

        const passwordHash = await hash(Password, 8);
        resolve(new InsertUser().execute({
          Email,
          Nome,
          Password: passwordHash
        }));
      } catch (error) {
        reject(error);
      }
    });
  }

  async verifyExist(email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {                
        resolve(new VerifyExistUser().execute(email));
      } catch (error) {
        reject(error);
      }
    });
  }
}
