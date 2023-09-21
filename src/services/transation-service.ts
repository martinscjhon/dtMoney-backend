import { GetAllByUserUuid, InsertTransation } from "../application/transation";
import { LogsModel, TransationModel } from "../domain/models";

export class TransationService {
  async create(payload: TransationModel, auth: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const insertTransation = new InsertTransation();
        const payloadTransation: TransationModel = {
          ...payload,
          UserUuid: auth.Uuid,
        };

        const payloadLog: LogsModel = {
          Description: "Você inseriu uma nova transação",
          Type: "POST",
          UserUuid: auth.Uuid,
        };

        resolve(await insertTransation.execute(payloadTransation, payloadLog));
      } catch (error) {
        reject(error);
      }
    });
  }

  async getAllByUserUuid(UserUuid: string): Promise<any[]> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await new GetAllByUserUuid().execute(UserUuid));
      } catch (error) {
        reject(error);
      }
    });
  }
}
