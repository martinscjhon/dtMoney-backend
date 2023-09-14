import { UserViewModel } from "domain/view-models/UserViewModel";

import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  create(): Promise<UserViewModel> {
    throw new Error("Method not implemented.");
  }
}
