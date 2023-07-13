import { Paper, Typography } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

export const TotalSavings = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <PaidIcon color="warning" fontSize="medium" />
      <Typography variant="subtitle1">Total savings</Typography>
      <Typography variant="h6" fontWeight="700">
        $ 1,500,100,900
      </Typography>
    </Paper>
  );
};
