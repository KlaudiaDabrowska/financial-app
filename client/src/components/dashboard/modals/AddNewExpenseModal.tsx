import {
  Alert,
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { createNewExpense } from "@/api/createNewExpense";
import { Currency, PaymentType } from "@/lib/types/Finances";
import { style } from "@/styles/modals";

interface IAddNewExpenseModalProps {
  open: boolean;
  expenseCategory: string;
  handleCloseModalWithNewExpense: () => void;
  setOpenSnackbar: (arg: boolean) => void;
}

export const AddNewExpenseModal = ({
  open,
  expenseCategory,
  handleCloseModalWithNewExpense,
  setOpenSnackbar,
}: IAddNewExpenseModalProps) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const {
    mutate: createNewExpenseMutation,
    isSuccess,
    isError,
    reset,
  } = useMutation(createNewExpense);

  const formik = useFormik({
    initialValues: {
      amount: 0,
      currency: Currency.PLN,
      paymentType: PaymentType.card,
      date: "",
    },
    validationSchema: Yup.object({
      amount: Yup.number().positive().required("This field is required"),
      currency: Yup.string()
        .oneOf(Object.values(Currency))
        .required("This field is required"),
      paymentType: Yup.string()
        .oneOf(Object.values(PaymentType))
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      createNewExpenseMutation({
        expenseCategory: expenseCategory,
        amount: values.amount,
        currency: Currency[values.currency],
        date: values.date,
        paymentType: PaymentType[values.paymentType],
      });
    },
  });

  const handleCurrencyChange = (e: SelectChangeEvent) => {
    const value = e.target.value;
    formik.setFieldValue("currency", value);
  };

  const handlePaymentTypeChange = (e: SelectChangeEvent) => {
    const value = e.target.value;
    formik.setFieldValue("paymentType", value);
  };

  const handleDateChange = (e: any) => {
    const date = e.$d.toISOString();
    formik.setFieldValue("date", date);
  };

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
      reset();
      handleCloseModalWithNewExpense();
      setOpenSnackbar(true);
    }
  }, [
    isSuccess,
    formik,
    reset,
    handleCloseModalWithNewExpense,
    setOpenSnackbar,
  ]);

  const currencies = [Currency.PLN, Currency.USD, Currency.GBP];
  const paymentTypes = [PaymentType.card, PaymentType.cash];

  return (
    <Modal
      open={open}
      onClose={handleCloseModalWithNewExpense}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" textAlign="center">
                Add a new income
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Amount"
                fullWidth
                id="amount"
                name="amount"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
              />
              {formik.errors.amount && formik.touched.amount && (
                <div>{formik.errors.amount}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <Select
                labelId="currency-select"
                id="currency"
                name="currency"
                label="Currency"
                onChange={handleCurrencyChange}
                onBlur={formik.handleBlur}
                value={formik.values.currency}
                sx={{ width: "100%" }}
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
              {formik.errors.currency && formik.touched.currency && (
                <div>{formik.errors.currency}</div>
              )}
            </Grid>

            <Grid item xs={12}>
              <Select
                labelId="payment-select"
                id="payment"
                name="payment"
                label="Payment Type"
                onChange={handlePaymentTypeChange}
                onBlur={formik.handleBlur}
                value={formik.values.paymentType}
                sx={{ width: "100%" }}
              >
                {paymentTypes.map((paymentType) => (
                  <MenuItem key={paymentType} value={paymentType}>
                    {paymentType}
                  </MenuItem>
                ))}
              </Select>
              {formik.errors.paymentType && formik.touched.paymentType && (
                <div>{formik.errors.paymentType}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                value={formik.values.date}
                onChange={handleDateChange}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
            {isError && (
              <div>Oops! Something went wrong. Please try again.</div>
            )}
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};
