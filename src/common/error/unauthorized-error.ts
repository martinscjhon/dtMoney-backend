import { ModuloError } from "../message";

export class UnauthorizedError extends Error {
  constructor() {
    super("Unauthorized");
    this.name = ModuloError.notAuthorization;
  }
}
