import { Box, Button, Grid } from "@mui/material";
import { useContext } from "react";
import { TotalExpense } from "./TotalExpense";
import { TotalIncome } from "./TotalIncome";
import { TotalSavings } from "./TotalSavings";
import { DashboardFinancialView } from "@/lib/types/Finances";
import { DashboardFinancialViewContext } from "@/utils/Providers";

export const BalancesSummary = () => {
  const financialViewContext = useContext(DashboardFinancialViewContext);

  return (
    <>
      <Grid container justifyContent="space-around" marginY={4} spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <TotalIncome />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <TotalExpense />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <TotalSavings />
        </Grid>
      </Grid>
      {financialViewContext.view !== DashboardFinancialView.add && (
        <Box justifyContent="center" display="flex">
          <Button
            variant="contained"
            sx={{
              color: "#000",
              border: 1,
              borderColor: "primary.main",
              fontWeight: "bold",
            }}
            onClick={() => {
              financialViewContext.setView(DashboardFinancialView.add);
            }}
          >
            Add new hajs
          </Button>
        </Box>
      )}
    </>
  );
};
