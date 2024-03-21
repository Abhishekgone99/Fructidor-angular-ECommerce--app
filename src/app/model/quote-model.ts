export class QuoteModel {
  constructor(
    public name: string,
    public email: string,
    public phone: any,
    public deliverydate: any,
    public quantity: number,
    public quantiy_unit: string
  ) {}
}
