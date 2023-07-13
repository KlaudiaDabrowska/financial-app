import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import {
  Box,
  Button,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

export const IncomeCategories = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModalWithSalary = () => setOpen(true);
  const handleCloseModalWithSalary = () => setOpen(false);

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? 370 : 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Grid item>
      <Button
        variant="outlined"
        startIcon={<ShoppingBasketOutlinedIcon />}
        sx={{ color: "black" }}
        onClick={handleOpenModalWithSalary}
      >
        Salary
      </Button>
      <Modal
        open={open}
        onClose={handleCloseModalWithSalary}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};
