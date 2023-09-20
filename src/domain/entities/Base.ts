import { PrimaryGeneratedColumn, Column, Index } from "typeorm";
import { v4 as UuidV4 } from "uuid";

export class Base {
  @Index()
  @PrimaryGeneratedColumn("increment")
  Id!: number;

  @Index()
  @Column({ type: "varchar" })
  Uuid: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  CreatedAt: Date;

  @Column({ type: "boolean", default: true })
  Enable: boolean;

  constructor() {
    this.Uuid = UuidV4();
    this.CreatedAt = new Date();
  }
}
