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
  useMediaQuery,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useEffect } from "react";
import { createNewIncome } from "@/api/createNewIncome";
import {
  handleDateChange,
  handlePaymentTypeChange,
} from "@/lib/helpers/forms/handleChanges";
import { initialValues } from "@/lib/helpers/forms/initialValues";
import { paymentTypes } from "@/lib/helpers/forms/paymentTypes";
import { validationSchema } from "@/lib/helpers/forms/validationSchema";
import { Currency, PaymentType } from "@/lib/types/Finances";
import { style } from "@/styles/modals";

interface IAddNewIncomeModalProps {
  open: boolean;
  incomeType: string;
  handleCloseModalWithNewIncome: () => void;
  setOpenSnackbar: (arg: boolean) => void;
}

export const AddNewIncomeModal = ({
  open,
  incomeType,
  handleCloseModalWithNewIncome,
  setOpenSnackbar,
}: IAddNewIncomeModalProps) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const {
    mutate: createNewIncomeMutation,
    isSuccess,
    isError,
    reset,
  } = useMutation(createNewIncome);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createNewIncomeMutation({
        incomeType: incomeType,
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
      handleCloseModalWithNewIncome();
      setOpenSnackbar(true);
    }
  }, [
    isSuccess,
    formik,
    reset,
    handleCloseModalWithNewIncome,
    setOpenSnackbar,
  ]);

  return (
    <Modal
      open={open}
      onClose={handleCloseModalWithNewIncome}
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">PLN</InputAdornment>
                  ),
                }}
              />
              {formik.errors.amount && formik.touched.amount && (
                <div>{formik.errors.amount}</div>
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
                <div>{formik.errors.paymentType}</div>
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
              <div>Oops! Something went wrong. Please try again.</div>
            )}
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};
