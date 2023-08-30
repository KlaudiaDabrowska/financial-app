import { Currency, PaymentType } from "./Finances";

export interface INewExpense {
  expenseCategory: string;
  amount: number;
  currency: Currency;
  date: string;
  paymentType: PaymentType;
}

export interface IExpenseResponse {
  expenses: IExpense[];
  totalAmount: ITotalAmount[];
}

export interface IExpense {
  id: string;
  expenseCategory: string;
  amount: number;
  currency: Currency;
  date: string;
  paymentType: PaymentType;
}

export interface ITotalAmount {
  currency: Currency;
  amount: number;
}

export interface IExpenseGroupByCategory {
  expenseCategory: string;
  totalAmount: number;
  currency: Currency;
}

export interface IExpenseGroupByGivenTimeRange {
  expenseCategory: string;
  amount: number;
  currency: Currency;
  date: string;
  paymentType: PaymentType;
}
