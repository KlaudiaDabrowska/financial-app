'use client';

import MenuIcon from '@mui/icons-material/Menu';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Box, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { ReactNode, useState } from 'react';
import { DrawerItem } from '@/components/dashboard/layout/DrawerItem';
import { Navbar } from '@/components/dashboard/layout/Navbar';
import { drawerWidth } from '@/lib/helpers/drawerWidth';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Navbar handleDrawerToggle={handleDrawerToggle} />
			<DrawerItem
				handleDrawerToggle={handleDrawerToggle}
				mobileOpen={mobileOpen}
			/>
			<Box
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};

export default DashboardLayout;
