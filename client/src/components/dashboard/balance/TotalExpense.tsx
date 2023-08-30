import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Card, CircularProgress, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ErrorInfo } from "@/components/common/ErrorInfo";
import { useGetExpenses } from "@/lib/hooks/useGetExpenses";
import { DashboardFinancialView } from "@/lib/types/Finances";
import { DashboardFinancialViewContext } from "@/utils/Providers";

export const TotalExpense = () => {
  const financialViewContext = useContext(DashboardFinancialViewContext);

  const { totalAmount, isLoading, isError } = useGetExpenses();

  const theme = useTheme();

  return (
    <>
      <Card
        elevation={3}
        sx={{ p: 2, cursor: "pointer" }}
        onClick={() => {
          financialViewContext.setView(DashboardFinancialView.totalExpense);
        }}
      >
        <RemoveCircleOutlineIcon color="error" fontSize="medium" />
        <Typography variant="subtitle1">Total expense</Typography>
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
    </>
  );
};
