import { PrimaryGeneratedColumn, Column } from "typeorm";

export class BaseModel {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  CreatedAt: Date;

  @Column({ type: "boolean", default: true })
  Enable: boolean;
}
