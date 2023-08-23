import { createNewIncome } from "@/api/createNewIncome";
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
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Currency, PaymentType } from "@/lib/types/Finances";
import { useEffect } from "react";

interface IAddNewIncomeModalProps {
  open: boolean;
  incomeType: string;
  handleCloseModalWithSalary: () => void;
  setOpenSnackbar: (arg: boolean) => void;
}

export const AddNewIncomeModal = ({
  open,
  incomeType,
  handleCloseModalWithSalary,
  setOpenSnackbar,
}: IAddNewIncomeModalProps) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const {
    mutate: createNewIncomeMutation,
    isSuccess,
    isError,
    reset,
  } = useMutation(createNewIncome);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? 370 : 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const formik = useFormik({
    initialValues: {
      amount: 0,
      currency: Currency.PLN,
      paymentType: PaymentType.card,
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .positive()
        .integer()
        .required("This field is required"),
      currency: Yup.string()
        .oneOf(Object.values(Currency))
        .required("This field is required"),
      paymentType: Yup.string()
        .oneOf(Object.values(PaymentType))
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      createNewIncomeMutation({
        incomeType: incomeType,
        amount: values.amount,
        currency: Currency[values.currency],
        //todo: add date picker
        date: new Date().toISOString(),
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

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
      reset();
      handleCloseModalWithSalary();
      setOpenSnackbar(true);
    }
  }, [isSuccess, formik, reset, handleCloseModalWithSalary, setOpenSnackbar]);

  const currencies = [Currency.PLN, Currency.USD, Currency.GBP];
  const paymentTypes = [PaymentType.card, PaymentType.cash];

  return (
    <Modal
      open={open}
      onClose={handleCloseModalWithSalary}
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
