import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './contexts/Auth';
import { queryClient } from './hooks/query';
import { Router } from './routes';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App(): ReactElement {
	return (
		<ThemeProvider theme={defaultTheme}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<AuthProvider>
						<Router />
					</AuthProvider>
				</BrowserRouter>
			</QueryClientProvider>
			<ToastContainer theme="colored" />
			<GlobalStyle />
		</ThemeProvider>
	);
}
