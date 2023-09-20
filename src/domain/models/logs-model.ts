export class LogsModel {
  Type: "POST" | "PUT" | "DELETE";
  Description: string;
  UserUuid: string;
  Uuid?: string;
  Enable?: boolean;
  CreatedAt?: Date;
  Id?: number;
}
