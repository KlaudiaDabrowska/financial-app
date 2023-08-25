import { Currency, PaymentType } from "./Finances";

export interface INewSaving {
  savingCategory: string;
  amount: number;
  currency: Currency;
  date: string;
}

export interface ISavingObject {
  id: string;
  savingCategory: string;
  amount: number;
  currency: Currency;
  date: string;
}
