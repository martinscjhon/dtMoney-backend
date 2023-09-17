import { Entity, Column, Index } from "typeorm";

import { Base } from "./Base";

@Entity({ name: "users" })
export class Users extends Base {
  @Index()
  @Column()
  Nome: string;

  @Column()
  Email: string;

  @Column()
  Password: string;
}
