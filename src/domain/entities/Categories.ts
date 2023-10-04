import { Entity, Column } from "typeorm";

import { Base } from "./Base";

@Entity({ name: "categories" })
export class Categories extends Base {
  @Column({ type: "varchar", length: 100, nullable: false })
  Name: string;
}
