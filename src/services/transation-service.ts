import {
  GetAllByUserUuid,
  GetResumeValuesByUuid,
  InsertTransation,
} from "../application/transation";
import {
  LogsModel,
  ResumeValuesModel,
  TransationModel,
} from "../domain/models";
import { FormatCurrency } from "../helpers/format-values";

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
        const listTransations = await new GetAllByUserUuid().execute(UserUuid);

        resolve(listTransations);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getResumeValues(UserUuid: string): Promise<ResumeValuesModel> {
    return new Promise(async (resolve, reject) => {
      try {
        const resume = await new GetResumeValuesByUuid().execute(UserUuid);

        resume.Entradas = new FormatCurrency().execute(Number(resume.Entradas));
        resume.Saidas = new FormatCurrency().execute(Number(resume.Saidas));
        resume.Total = new FormatCurrency().execute(Number(resume.Total));

        resolve(resume);
      } catch (error) {
        reject(error);
      }
    });
  }
}
