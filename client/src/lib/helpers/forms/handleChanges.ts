import { SelectChangeEvent } from "@mui/material";

export const handleCurrencyChange = (e: SelectChangeEvent, formik: any) => {
  const value = e.target.value;
  formik.setFieldValue("currency", value);
};

export const handlePaymentTypeChange = (e: SelectChangeEvent, formik: any) => {
  const value = e.target.value;
  formik.setFieldValue("paymentType", value);
};

export const handleDateChange = (e: any, formik: any) => {
  const date = e.$d.toISOString();
  formik.setFieldValue("date", date);
};
