import { Entity, Column } from "typeorm";

import { Base } from "./Base";

@Entity({ name: "transations" })
export class Transations extends Base {
  @Column({ type: "varchar", length: 100, nullable: false })
  Description: string;

  @Column({ type: "int", nullable: false })
  Value: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  Category: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  Type: string;

  @Column({ type: "varchar", length: 60, nullable: false })
  UserUuid: string;
}
