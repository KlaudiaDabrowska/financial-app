import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { usePathname } from "next/navigation";

export const DrawerContent = () => {
  const pathname = usePathname();

  const drawerItems = [
    { name: "dashboard", icon: <SpaceDashboardIcon />, href: "/dashboard" },
    {
      name: "statistics",
      icon: <AssessmentIcon />,
      href: "/dashboard/statistics",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        height: "100%",
        overflowX: "hidden",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Financial app
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {drawerItems.map((drawerItem) => {
          return (
            <ListItem
              key={drawerItem.name}
              disablePadding
              sx={{
                backgroundColor:
                  pathname === drawerItem.href ? "primary.main" : "transparent",
                borderRadius: 1,
                mx: 2,
              }}
            >
              <ListItemButton href={`${drawerItem.href}`}>
                <ListItemIcon
                  sx={{
                    color: pathname === drawerItem.href ? "black" : "auto",
                  }}
                >
                  {drawerItem.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    drawerItem.name.charAt(0).toUpperCase() +
                    drawerItem.name.slice(1)
                  }
                  primaryTypographyProps={{
                    fontWeight: pathname === drawerItem.href ? "bold" : "none",
                    color: pathname === drawerItem.href ? "black" : "inherit",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
