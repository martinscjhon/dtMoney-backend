import { UserViewModel } from "domain/view-models/UserViewModel";

export interface IUserRepository {
  create(): Promise<UserViewModel>;
}
