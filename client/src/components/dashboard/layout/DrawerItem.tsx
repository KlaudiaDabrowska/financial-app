import { drawerWidth } from "@/lib/helpers/drawerWidth";
import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { DrawerContent } from "./DrawerContent";

interface IDrawerItemProps {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

export const DrawerItem = ({
  handleDrawerToggle,
  mobileOpen,
}: IDrawerItemProps) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <DrawerContent />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
};
