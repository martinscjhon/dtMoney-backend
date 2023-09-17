import { PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as UuidV4 } from "uuid";

export class Base {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "uuid"})
  Uuid: string;
  
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  CreatedAt: Date;

  @Column({ type: "boolean", default: true })
  Enable: boolean;

  constructor() {
    this.Uuid = UuidV4()
  }
}
