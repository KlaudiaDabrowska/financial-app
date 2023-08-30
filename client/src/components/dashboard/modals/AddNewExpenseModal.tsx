import {
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useEffect } from "react";
import { createNewExpense } from "@/api/createNewExpense";
import { ErrorInfo } from "@/components/common/ErrorInfo";
import {
  handleDateChange,
  handlePaymentTypeChange,
} from "@/lib/helpers/forms/handleChanges";
import { initialValues } from "@/lib/helpers/forms/initialValues";
import { paymentTypes } from "@/lib/helpers/forms/paymentTypes";
import { validationSchema } from "@/lib/helpers/forms/validationSchema";
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
  const {
    mutate: createNewExpenseMutation,
    isSuccess,
    isError,
    reset,
  } = useMutation(createNewExpense);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createNewExpenseMutation({
        expenseCategory: expenseCategory,
        amount: values.amount,
        currency: Currency[values.currency],
        date: values.date,
        paymentType: PaymentType[values.paymentType],
      });
    },
  });

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
                Add a new expense
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">PLN</InputAdornment>
                  ),
                }}
              />
              {formik.errors.amount && formik.touched.amount && (
                <ErrorInfo error={formik.errors.amount} />
              )}
            </Grid>

            <Grid item xs={12}>
              <Select
                labelId="payment-select"
                id="payment"
                name="payment"
                label="Payment Type"
                onChange={(e) => handlePaymentTypeChange(e, formik)}
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
                <ErrorInfo error={formik.errors.paymentType} />
              )}
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                value={formik.values.date}
                onChange={(e) => handleDateChange(e, formik)}
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
              <ErrorInfo error="Oops! Something went wrong. Please try again." />
            )}
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};
