import { Currency, PaymentType } from "@/lib/types/Finances";

export const initialValues = {
  amount: 0,
  currency: Currency.PLN,
  paymentType: PaymentType.card,
  date: "",
};
