import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Button, Grid } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { AddNewExpenseModal } from "../modals/AddNewExpenseModal";
import { AddNewSavingModal } from "../modals/AddNewSavingModal";
import { SnackbarInfo } from "@/components/common/Snackbar";

export const SavingCategories = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [savingCategory, setSavingCategory] = useState<string>("");

  const handleOpenModalWithNewSaving = () => {
    setOpenModal(true);
  };

  const handleCloseModalWithNewSaving = () => {
    setOpenModal(false), setSavingCategory("");
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
          startIcon={<FlightTakeoffIcon />}
          sx={{ color: "black" }}
          onClick={() => {
            setSavingCategory("Holidays"), handleOpenModalWithNewSaving();
          }}
        >
          For holidays
        </Button>
      </Grid>
      <AddNewSavingModal
        open={openModal}
        handleCloseModalWithNewSaving={handleCloseModalWithNewSaving}
        setOpenSnackbar={setOpenSnackbar}
        savingCategory={savingCategory}
      />
      <SnackbarInfo
        openSnackbar={openSnackbar}
        severity="success"
        handleCloseSnackbar={handleCloseSnackbar}
        message="Saving added successfully!"
      />
    </>
  );
};
