import PaidIcon from "@mui/icons-material/Paid";
import { Card, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { DashboardFinancialView } from "@/lib/types/Finances";
import { DashboardFinancialViewContext } from "@/utils/Providers";

export const TotalSavings = () => {
  const financialViewContext = useContext(DashboardFinancialViewContext);

  return (
    <Card
      elevation={3}
      sx={{ p: 2, cursor: "pointer" }}
      onClick={() => {
        financialViewContext.setView(DashboardFinancialView.totalSaving);
      }}
    >
      <PaidIcon color="warning" fontSize="medium" />
      <Typography variant="subtitle1">Total savings</Typography>
      <Typography variant="h6" fontWeight="700">
        $ 1,500,100,900
      </Typography>
    </Card>
  );
};
