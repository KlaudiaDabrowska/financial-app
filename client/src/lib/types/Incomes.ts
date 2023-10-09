import { Currency, PaymentType } from "./Finances";

export interface INewIncome {
  incomeType: string;
  amount: number;
  currency: Currency;
  date: string;
  paymentType: PaymentType;
}

export interface IIncomeResponse {
  incomes: IIncome[];
  totalAmount: ITotalAmount[];
}

export interface IIncome {
  id: string;
  incomeType: string;
  amount: number;
  currency: Currency;
  date: string;
  paymentType: PaymentType;
}

export interface ITotalAmount {
  currency: Currency;
  amount: number;
}
