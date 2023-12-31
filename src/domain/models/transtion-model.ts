export class TransationModel {
  Description: string;
  Value: number;
  Category: string;
  Type: "Revenue" | "Expense";
  UserUuid: string;
  Uuid?: string;
  Enable?: boolean;
  CreatedAt?: Date;
  Id?: number;
}
