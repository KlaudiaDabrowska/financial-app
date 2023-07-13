import { Grid } from "@mui/material";
import { IncomeCategories } from "./IncomeCategories";
import { Finances } from "@/lib/types/Finances";
import { ExpenseCategories } from "./ExpenseCategories";

export const AddExpenseIncome = ({ newAmount }: { newAmount: Finances }) => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-around"
      marginTop={4}
      spacing={2}
    >
      {newAmount === Finances.expense ? (
        <ExpenseCategories />
      ) : (
        <IncomeCategories />
      )}
    </Grid>
  );
};
