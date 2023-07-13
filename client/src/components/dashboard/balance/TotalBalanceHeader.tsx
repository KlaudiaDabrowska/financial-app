import { Box, IconButton, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export const TotalBalanceHeader = () => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "grey.300" }}>
      <Typography variant="subtitle1">Total balance</Typography>
      <Typography variant="h6" fontWeight="700">
        $ 1,500,100,900
        {/* modal will be appear after click, with info how many is from card and cash*/}
        <IconButton>
          <VisibilityOutlinedIcon />
        </IconButton>
      </Typography>
    </Box>
  );
};
