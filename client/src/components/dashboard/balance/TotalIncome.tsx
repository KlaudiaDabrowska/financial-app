import { Paper, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const TotalIncome = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <AddCircleOutlineIcon color="success" fontSize="medium" />
      <Typography variant="subtitle1">Total income</Typography>
      <Typography variant="h6" fontWeight="700">
        $ 1,500,100,900
      </Typography>
    </Paper>
  );
};
