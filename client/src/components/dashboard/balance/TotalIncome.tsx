import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Card, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { DashboardFinancialView } from "@/lib/types/Finances";
import { DashboardFinancialViewContext } from "@/utils/Providers";

export const TotalIncome = () => {
  const financialViewContext = useContext(DashboardFinancialViewContext);

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
      <Typography variant="h6" fontWeight="700">
        $ 1,500,100,900
      </Typography>
    </Card>
  );
};
