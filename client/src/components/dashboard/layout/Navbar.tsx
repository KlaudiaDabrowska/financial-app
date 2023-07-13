import { drawerWidth } from "@/lib/helpers/drawerWidth";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WavingHandIcon from "@mui/icons-material/WavingHand";

export const Navbar = ({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) => {
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
          Data
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
