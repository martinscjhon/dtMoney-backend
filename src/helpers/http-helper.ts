export const badRequest = (res: any, message: string) =>
  res.status(400).json({ message });

export const forbidden = (res: any, error: Error) =>
  res.status(403).json({ body: error });

// export const unauthorized = (res: any) => res.status(401).json({ body: new UnauthorizedError() });

// export const serverError = (res: any, error: Error) =>
//   res.status(500).json({ body: new DataMessageError(error.message) });

export const ok = (res: any, data: any) =>
  res.status(200).json({ body: data, isError: false });

export const commentResult = (res: any, data: any, message: string) =>
  res.status(200).json({ message, body: data, isError: true });

export const noContent = (res: any) => res.status(204).json({ body: null });
