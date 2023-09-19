import { Entity, Column, Index } from "typeorm";

import { Base } from "./Base";

@Entity({ name: "users" })
export class Users extends Base {
  @Index()
  @Column({ type: "varchar", length: 100, nullable: false })
  Name: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  Email: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  Password: string;
}
