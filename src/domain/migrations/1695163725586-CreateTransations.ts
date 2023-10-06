import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransations1695163725586 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transations",
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
            name: "Description",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "Value",
            type: "float",
            isNullable: false,
          },
          {
            name: "Category",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "Type",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "UserUuid",
            type: "varchar",
            length: "60",
            isNullable: false,
          },
          {
            name: "Enable",
            type: "boolean",
            default: true,
          },
          {
            name: "CreatedAt",
            type: "timestamp",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transations");
  }
}
