"use client";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

enum Finances {
  expanse = "expanse",
  income = "income",
}

export default function Dashboard() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [newMoney, setNewMoney] = useState<Finances>(Finances.expanse);

  const handleToggleSwitch = (money: Finances) => {
    setIsSwitchOn(!isSwitchOn);
    setNewMoney(money);
  };

  return (
    <>
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
      <Grid container justifyContent="space-around" marginY={4} spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <AddCircleOutlineIcon color="success" fontSize="medium" />
            <Typography variant="subtitle1">Total income</Typography>
            <Typography variant="h6" fontWeight="700">
              $ 1,500,100,900
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <RemoveCircleOutlineIcon color="error" fontSize="medium" />
            <Typography variant="subtitle1">Total outcome</Typography>
            <Typography variant="h6" fontWeight="700">
              $ 1,500,100,900
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <PaidIcon color="warning" fontSize="medium" />
            <Typography variant="subtitle1">Total savings</Typography>
            <Typography variant="h6" fontWeight="700">
              $ 1,500,100,900
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box justifyContent="center" display="flex" marginY={6}>
        <Button
          variant={`${isSwitchOn ? "contained" : "outlined"}`}
          sx={{
            color: "#000",
            mr: 2,
            border: 1,
            borderColor: "primary.main",
            fontWeight: "bold",
          }}
          onClick={() => handleToggleSwitch(Finances.expanse)}
        >
          Add expanse
        </Button>
        <Button
          variant={`${isSwitchOn ? "outlined" : "contained"}`}
          sx={{
            color: "#000",
            border: 1,
            borderColor: "primary.main",
            fontWeight: "bold",
          }}
          onClick={() => handleToggleSwitch(Finances.income)}
        >
          Add income
        </Button>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="space-around"
        marginTop={4}
        spacing={2}
      >
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<ShoppingBasketOutlinedIcon />}
            sx={{ color: "black" }}
          >
            Groceries
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<RestaurantOutlinedIcon />}
            sx={{ color: "black" }}
          >
            Restaurant
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<TheatersOutlinedIcon />}
            sx={{ color: "black" }}
          >
            Entertainment
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<DirectionsBusFilledOutlinedIcon />}
            sx={{ color: "black" }}
          >
            Transport
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<LocalHospitalOutlinedIcon />}
            sx={{ color: "black" }}
          >
            Health
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
