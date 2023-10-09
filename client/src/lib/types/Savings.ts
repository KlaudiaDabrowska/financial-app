import { Currency } from "./Finances";

export interface INewSaving {
  savingCategory: string;
  amount: number;
  currency: Currency;
  date: string;
}

export interface ISavingResponse {
  savings: ISaving[];
  totalAmount: ITotalAmount[];
}

export interface ISaving {
  id: string;
  savingCategory: string;
  amount: number;
  currency: Currency;
  date: string;
}

export interface ITotalAmount {
  amount: number;
  currency: Currency;
}
