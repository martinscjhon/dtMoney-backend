export class TransationModel {
  Description: string;
  Value: number;
  Category: string;
  Type: "Revenue" | "Expense";
  Uuid?: string;
  Enable?: boolean;
  CreatedAt?: Date;
  Id?: number;
}
