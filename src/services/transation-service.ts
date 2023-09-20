// import { hash } from "bcrypt";

// import {
//   VerifyExistUserByEmail,
//   InsertUser,
//   FindOneUserByEmail,
// } from "../application/user";
import { UserModel } from "../domain/models";

export class TransationService {
  async create(payload: UserModel): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(payload);
        // resolve(
        //   new InsertUser().execute({
        //     Email,
        //     Name,
        //     Password: await hash(Password, 8),
        //   }),
        // );
      } catch (error) {
        reject(error);
      }
    });
  }
}
