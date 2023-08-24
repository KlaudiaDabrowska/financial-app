'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { theme } from '@/styles/theme';

function Providers({ children }: React.PropsWithChildren) {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				{/* <CssBaseline /> */}
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default Providers;
