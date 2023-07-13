export enum PaymentType {
  cash = 'cash',
  card = 'card',
}

export class CreateIncomeDto {
  incomeType: string;
  amount: number;
  currency: string;
  date: string;
  paymentType: PaymentType;
}
