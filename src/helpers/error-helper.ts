import { badRequest } from "./http-helper";

export const errorSend = (res: any, error: any): any => {  
  return badRequest(res, error.message);
};
