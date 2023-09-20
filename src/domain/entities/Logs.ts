import { Entity, Column } from "typeorm";

import { Base } from "./Base";

@Entity({ name: "logs" })
export class Logs extends Base {
  @Column({ type: "varchar", length: 100, nullable: false })
  Type: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  Description: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  UserUuid: string;
}
