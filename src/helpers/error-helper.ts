import { badRequest } from "./http-helper";

export const errorSend = (res: any, error: any) => {
    if (error instanceof Error) {
    return badRequest(res, error.message);
  }
};
