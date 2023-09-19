import { UnauthorizedError } from "../common/error";
import { Environment } from "../config";

export const badRequest = (res: any, message: string) =>
  res.status(Environment.StatusCodeBadRequest).json({ message, isError: true });

export const forbidden = (res: any, error: Error) =>
  res.status(Environment.StatusCodeNotPermission).json({ body: error });

export const unauthorized = (res: any) =>
  res
    .status(Environment.StatusCodeUnauthorized)
    .json({ body: new UnauthorizedError() });

export const ok = (res: any, data: any) =>
  res
    .status(Environment.StatusCodeSuccess)
    .json({ body: data, isError: false });

export const noContent = (res: any) =>
  res.status(Environment.StatusCodeNotContent).json({ body: null });
