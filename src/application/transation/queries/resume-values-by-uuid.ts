import { getConnection } from "typeorm";

import { ResumeValuesModel } from "../../../domain/models";

export class GetResumeValuesByUuid {
  async execute(UserUuid: string): Promise<ResumeValuesModel> {
    return new Promise(async (resolve, reject) => {
      try {
        const queryRunner = await getConnection().createQueryRunner();
        await queryRunner.startTransaction();
        const type = "t.`Type`";
        const sql = `
                select 	
                SUM( CASE WHEN ${type} = 'Revenue' THEN t.Value ELSE 0 END ) AS Entradas,
                SUM( CASE WHEN ${type} = 'Expense' THEN t.Value ELSE 0 END ) AS Saidas,
                SUM(
                  CASE WHEN ${type} = 'Revenue' THEN t.Value ELSE 0 END 
                  - CASE WHEN ${type}= 'Expense' THEN t.Value ELSE 0 END
                ) AS Total
              from transations t WHERE t.UserUuid = "${UserUuid}"          
        `;
        const resume = await queryRunner.query(sql);
        resolve(resume[0]);
      } catch (error) {
        reject(error);
      }
    });
  }
}
