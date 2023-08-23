import { PaymentType } from "./Finances";

export interface INewIncome {
  incomeType: string;
  amount: number;
  currency: string;
  date: string;
  paymentType: PaymentType;
}

export interface IIncomeObject {
  id: number;
  incomeType: string;
  amount: number;
  currency: string;
  date: string;
  paymentType: PaymentType;
}
