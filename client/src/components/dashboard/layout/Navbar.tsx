import MenuIcon from "@mui/icons-material/Menu";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import dayjs from "dayjs";

import { drawerWidth } from "@/lib/helpers/drawerWidth";

export const Navbar = ({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) => {
  // const start = dayjs().toISOString();
  const start = dayjs().locale("pl").startOf("day").toISOString();
  const end = dayjs().locale("pl").endOf("day").toISOString();

  const selectDate = [
    { title: "Today", start: start, end: end },
    {
      title: "Last week",
      start: dayjs().locale("pl").startOf("week").toISOString(),
      end: dayjs().locale("pl").endOf("week").toISOString(),
    },
  ];

  console.log(selectDate[1].start);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" noWrap component="div" fontWeight="bold">
          Hello, user! <WavingHandIcon sx={{ color: "#FBCB49" }} />
        </Typography>
        <Typography variant="h6" noWrap component="div" fontWeight="bold">
          {/* <Select
            labelId="date-select"
            id="date"
            name="date"
            label="date"
            onChange={(e) => handleCurrencyChange(e, formik)}
            onBlur={formik.handleBlur}
            value={formik.values.currency}
            sx={{ width: "100%" }}
          >
            {currencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select> */}
          {/* {start.format("dddd")}, {start.format("MMMM")} {start.format("D")} */}
          {new Date().toDateString()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
