export class FormatCurrency {
  public execute(value: number): string {
    const format = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

    return format;
  }
}
