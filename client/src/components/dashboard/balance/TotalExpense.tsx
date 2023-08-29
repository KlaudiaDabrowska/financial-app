import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Card, Paper, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useGetExpenses } from "@/lib/hooks/useGetExpenses";
import { DashboardFinancialView } from "@/lib/types/Finances";
import { DashboardFinancialViewContext } from "@/utils/Providers";

export const TotalExpense = () => {
  const financialViewContext = useContext(DashboardFinancialViewContext);

  const { totalAmount } = useGetExpenses();

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
        {totalAmount?.map((amount, index) => {
          return (
            <Typography
              variant="h6"
              fontWeight="700"
              key={`${index}-${amount}`}
            >
              {amount.amount} {amount.currency}
            </Typography>
          );
        })}
      </Card>
    </>
  );
};
