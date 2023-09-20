import { Entity, Column, Index } from "typeorm";

import { Base } from "./Base";

@Entity({ name: "transations" })
export class Transation extends Base {
  @Index()
  @Column({ type: "varchar", length: 100, nullable: false })
  Description: string;

  @Column({ type: "int", nullable: false })
  Value: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  Category: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  Type: string;
}
