import { Grid } from "@mui/material";
import { TotalExpense } from "./TotalExpense";
import { TotalIncome } from "./TotalIncome";
import { TotalSavings } from "./TotalSavings";

export const BalancesSummary = () => {
  return (
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
  );
};
