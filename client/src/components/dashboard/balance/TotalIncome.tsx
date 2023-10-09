import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Card, CircularProgress, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ErrorInfo } from "@/components/common/ErrorInfo";
import { useGetIncomes } from "@/lib/hooks/useGetIncomes";
import { DashboardFinancialView } from "@/lib/types/Finances";
import { DashboardFinancialViewContext } from "@/utils/Providers";

export const TotalIncome = () => {
  const financialViewContext = useContext(DashboardFinancialViewContext);

  const { totalAmount, isLoading, isError } = useGetIncomes();

  const theme = useTheme();

  return (
    <Card
      elevation={3}
      sx={{ p: 2, cursor: "pointer" }}
      onClick={() => {
        financialViewContext.setView(DashboardFinancialView.totalIncome);
      }}
    >
      <AddCircleOutlineIcon color="success" fontSize="medium" />
      <Typography variant="subtitle1">Total income</Typography>
      {isLoading ? (
        <CircularProgress
          size={25}
          sx={{ color: theme.palette.primary.dark }}
        />
      ) : isError ? (
        <ErrorInfo error="Oops. Something went wrong." />
      ) : (
        totalAmount?.map((amount, index) => {
          return (
            <Typography
              variant="h6"
              fontWeight="700"
              key={`${index}-${amount}`}
            >
              {amount.amount} {amount.currency}
            </Typography>
          );
        })
      )}
    </Card>
  );
};
