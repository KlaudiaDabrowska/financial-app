import * as Yup from "yup";
import { Currency, PaymentType } from "../../types/Finances";

export const validationSchema = Yup.object({
  amount: Yup.number().positive().required("This field is required"),
  currency: Yup.string()
    .oneOf(Object.values(Currency))
    .required("This field is required"),
  paymentType: Yup.string()
    .oneOf(Object.values(PaymentType))
    .required("This field is required"),
});
