import { Grid } from "@mui/material";
import { ExpenseCategories } from "./ExpenseCategories";
import { IncomeCategories } from "./IncomeCategories";
import { SavingCategories } from "./SavingCategories";
import { Finances } from "@/lib/types/Finances";

export const AddExpenseIncome = ({ newAmount }: { newAmount: Finances }) => {
  const renderAppropriateCategories = () => {
    switch (newAmount) {
      case Finances.expense:
        return <ExpenseCategories />;
      case Finances.income:
        return <IncomeCategories />;
      case Finances.saving:
        return <SavingCategories />;
      default:
        return <ExpenseCategories />;
    }
  };

  return (
    <Grid
      container
      display="flex"
      justifyContent="space-around"
      marginTop={4}
      spacing={2}
    >
      {renderAppropriateCategories()}
    </Grid>
  );
};
