import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Box, IconButton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { TotalBalanceModal } from "../modals/TotalBalanceModal";
import { getIncomes } from "@/api/getIncomes";
import { useGetIncomes } from "@/lib/hooks/useGetIncomes";

export const TotalBalanceHeader = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { incomes, isLoading } = useGetIncomes();

  //add select box for currency ??

  return (
    <Box sx={{ borderBottom: 1, borderColor: "grey.300" }}>
      <Typography variant="subtitle1">Total balance</Typography>
      <Typography variant="h6" fontWeight="700">
        1,500,100,900
        <IconButton onClick={handleOpen}>
          <VisibilityOutlinedIcon />
        </IconButton>
      </Typography>
      <TotalBalanceModal open={open} handleClose={handleClose} />
    </Box>
  );
};
