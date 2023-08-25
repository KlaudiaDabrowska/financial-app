import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import { Button, Grid } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { AddNewExpenseModal } from "../modals/AddNewExpenseModal";
import { SnackbarInfo } from "@/components/common/Snackbar";

export const ExpenseCategories = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [expenseCategory, setExpenseCategory] = useState<string>("");

  const handleOpenModalWithNewExpense = () => {
    setOpenModal(true);
  };

  const handleCloseModalWithNewExpense = () => {
    setOpenModal(false), setExpenseCategory("");
  };

  const handleCloseSnackbar = (
    event?: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <>
      <Grid item>
        <Button
          variant="outlined"
          startIcon={<ShoppingBasketOutlinedIcon />}
          sx={{ color: "black" }}
          onClick={() => {
            setExpenseCategory("Groceries"), handleOpenModalWithNewExpense();
          }}
        >
          Groceries
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          startIcon={<RestaurantOutlinedIcon />}
          sx={{ color: "black" }}
          onClick={() => {
            setExpenseCategory("Restaurant"), handleOpenModalWithNewExpense();
          }}
        >
          Restaurant
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          startIcon={<TheatersOutlinedIcon />}
          sx={{ color: "black" }}
          onClick={() => {
            setExpenseCategory("Entertainment"),
              handleOpenModalWithNewExpense();
          }}
        >
          Entertainment
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          startIcon={<DirectionsBusFilledOutlinedIcon />}
          sx={{ color: "black" }}
          onClick={() => {
            setExpenseCategory("Transport"), handleOpenModalWithNewExpense();
          }}
        >
          Transport
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          startIcon={<LocalHospitalOutlinedIcon />}
          sx={{ color: "black" }}
          onClick={() => {
            setExpenseCategory("Health"), handleOpenModalWithNewExpense();
          }}
        >
          Health
        </Button>
      </Grid>
      <AddNewExpenseModal
        open={openModal}
        handleCloseModalWithNewExpense={handleCloseModalWithNewExpense}
        setOpenSnackbar={setOpenSnackbar}
        expenseCategory={expenseCategory}
      />
      <SnackbarInfo
        openSnackbar={openSnackbar}
        severity="success"
        handleCloseSnackbar={handleCloseSnackbar}
        message="Expense added successfully!"
      />
    </>
  );
};
