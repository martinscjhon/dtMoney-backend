import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLogs1695216967099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "logs",
        columns: [
          {
            name: "id",
            type: "int",
            generationStrategy: "increment",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "Uuid",
            type: "varchar",
            length: "60",
            generationStrategy: "uuid",
          },
          {
            name: "Type",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "Description",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "UserUuid",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("logs");
  }
}
