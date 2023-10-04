import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1695392076315 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
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
            name: "Name",
            type: "varchar",
            length: "100",
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
    await queryRunner.dropTable("categories");
  }
}
