import { UnauthorizedError } from "../common/error/unauthorized-error";
import { badRequest, unauthorized } from "./http-helper";

export const errorDispatch = (res: any, error: any): any => {
  if (error instanceof UnauthorizedError) {
    return unauthorized(res);
  }
  if (error instanceof Error) {
    return badRequest(res, error.message);
  }
};
