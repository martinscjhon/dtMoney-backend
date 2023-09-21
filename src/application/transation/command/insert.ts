import { Repository, getRepository, getConnection } from "typeorm";

import { Logs, Transations } from "../../../domain/entities";
import { LogsModel, TransationModel } from "../../../domain/models";

export class InsertTransation {
  private repository: Repository<Transations>;
  private repositoryLog: Repository<Logs>;

  constructor() {
    this.repository = getRepository(Transations);
    this.repositoryLog = getRepository(Logs);
  }

  async execute(
    payloadTransation: TransationModel,
    payloadLog: LogsModel,
  ): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const queryRunner = await getConnection().createQueryRunner();
      await queryRunner.startTransaction();

      try {
        const insertTransation = this.repository.create();
        insertTransation.Category = payloadTransation.Category;
        insertTransation.Description = payloadTransation.Description;
        insertTransation.Type = payloadTransation.Type;
        insertTransation.Value = payloadTransation.Value;
        insertTransation.UserUuid = payloadTransation.UserUuid;        

        const insertLogs = this.repositoryLog.create();
        insertLogs.Description = payloadLog.Description;
        insertLogs.Type = payloadLog.Type;
        insertLogs.UserUuid = payloadLog.UserUuid;

        this.repository.save(insertTransation);
        this.repositoryLog.save(insertLogs);

        await queryRunner.commitTransaction();

        resolve(true);
      } catch (error) {
        await queryRunner.rollbackTransaction();
        reject(error);
      }
    });
  }
}
