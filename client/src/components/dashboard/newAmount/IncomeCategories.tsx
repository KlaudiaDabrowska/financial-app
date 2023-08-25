import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Button, Grid } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { AddNewIncomeModal } from "../modals/AddNewIncomeModal";
import { SnackbarInfo } from "@/components/common/Snackbar";

export const IncomeCategories = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [incomeType, setIncomeType] = useState<string>("");

  const handleOpenModalWithNewIncome = () => {
    setOpenModal(true);
  };

  const handleCloseModalWithNewIncome = () => {
    setOpenModal(false), setIncomeType("");
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
            setIncomeType("Salary"), handleOpenModalWithNewIncome();
          }}
        >
          Salary
        </Button>
      </Grid>

      {/* <Grid item>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{ color: "black" }}
          onClick={handleOpenModalWithSalary}
        >
          Add a new type of income
        </Button>
      </Grid> */}
      <AddNewIncomeModal
        open={openModal}
        handleCloseModalWithNewIncome={handleCloseModalWithNewIncome}
        setOpenSnackbar={setOpenSnackbar}
        incomeType={incomeType}
      />
      <SnackbarInfo
        openSnackbar={openSnackbar}
        severity="success"
        handleCloseSnackbar={handleCloseSnackbar}
        message="Income added successfully!"
      />
    </>
  );
};
