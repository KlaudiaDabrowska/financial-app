import { Currency, PaymentType } from "./Finances";

export interface INewExpense {
  expenseCategory: string;
  amount: number;
  currency: Currency;
  date: string;
  paymentType: PaymentType;
}

export interface IExpenseObject {
  id: string;
  expenseCategory: string;
  amount: number;
  currency: Currency;
  date: string;
  paymentType: PaymentType;
}
