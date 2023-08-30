import * as Yup from "yup";
import { Currency, PaymentType } from "../../types/Finances";

export const validationSchema = Yup.object({
  amount: Yup.number()
    .positive("Amount must be a positive number")
    .required("This field is required"),
  paymentType: Yup.string()
    .oneOf(Object.values(PaymentType))
    .required("This field is required"),
});
