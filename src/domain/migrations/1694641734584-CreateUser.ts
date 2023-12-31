import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1694641734584 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
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
            name: "Email",
            type: "varchar",
            length: "100",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "Password",
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
    await queryRunner.dropTable("users");
  }
}
