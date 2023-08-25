import {
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
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
import { createNewSaving } from "@/api/createNewSaving";
import { currencies } from "@/lib/helpers/forms/currencies";
import {
  handleCurrencyChange,
  handleDateChange,
} from "@/lib/helpers/forms/handleChanges";
import { Currency } from "@/lib/types/Finances";
import { style } from "@/styles/modals";

interface IAddNewSavingModalProps {
  open: boolean;
  savingCategory: string;
  handleCloseModalWithNewSaving: () => void;
  setOpenSnackbar: (arg: boolean) => void;
}

export const AddNewSavingModal = ({
  open,
  savingCategory,
  handleCloseModalWithNewSaving,
  setOpenSnackbar,
}: IAddNewSavingModalProps) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const {
    mutate: createNewSavingMutation,
    isSuccess,
    isError,
    reset,
  } = useMutation(createNewSaving);

  const formik = useFormik({
    initialValues: {
      amount: 0,
      currency: Currency.PLN,
      date: "",
    },
    validationSchema: Yup.object({
      amount: Yup.number().positive().required("This field is required"),
      currency: Yup.string()
        .oneOf(Object.values(Currency))
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      createNewSavingMutation({
        savingCategory: savingCategory,
        amount: values.amount,
        currency: Currency[values.currency],
        date: values.date,
      });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
      reset();
      handleCloseModalWithNewSaving();
      setOpenSnackbar(true);
    }
  }, [
    isSuccess,
    formik,
    reset,
    handleCloseModalWithNewSaving,
    setOpenSnackbar,
  ]);

  return (
    <Modal
      open={open}
      onClose={handleCloseModalWithNewSaving}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" textAlign="center">
                Add a new saving
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
                onChange={(e) => handleCurrencyChange(e, formik)}
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
