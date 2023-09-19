import { Environment } from "../config";

export const badRequest = (res: any, message: string) =>
  res.status(Environment.StatusCodeBadRequest).json({ message });

export const forbidden = (res: any, error: Error) =>
  res.status(Environment.StatusCodeNotPermission).json({ body: error });

// export const unauthorized = (res: any) => res.status(401).json({ body: new UnauthorizedError() });

export const ok = (res: any, data: any) =>
  res
    .status(Environment.StatusCodeSuccess)
    .json({ body: data, isError: false });

export const commentResult = (res: any, data: any, message: string) =>
  res
    .status(Environment.StatusCodeSuccess)
    .json({ message, body: data, isError: true });

export const noContent = (res: any) =>
  res.status(Environment.StatusCodeNotContent).json({ body: null });
