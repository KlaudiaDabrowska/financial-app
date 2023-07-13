import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Paper, Typography } from "@mui/material";

export const TotalOutcome = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <RemoveCircleOutlineIcon color="error" fontSize="medium" />
      <Typography variant="subtitle1">Total outcome</Typography>
      <Typography variant="h6" fontWeight="700">
        $ 1,500,100,900
      </Typography>
    </Paper>
  );
};
