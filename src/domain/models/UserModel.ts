import { Entity, Column, Index } from "typeorm";

import { BaseModel } from "./BaseModel";

@Entity()
export class UserModel extends BaseModel {
  @Index()
  @Column()
  Nome: string;

  @Column()
  Email: string;

  @Column()
  Password: string;
}
