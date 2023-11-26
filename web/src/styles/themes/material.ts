import type { Theme } from '@mui/material';
import { createTheme } from '@mui/material';

import { MuiCssBaseline, MuiPaper } from './components';
import { MuiTextField } from './components/text-field';
import { Palette } from './palette';
import { Typography } from './typography';

export const MaterialTheme: Theme = createTheme({
	palette: Palette,
	typography: Typography,
	shape: {
		borderRadius: 8,
	},

	components: {
		MuiTextField: MuiTextField,
		MuiPaper: MuiPaper,
		MuiCssBaseline: MuiCssBaseline,
		// MuiInputAdornment: {
		// 	styleOverrides: {
		// 		root: {
		// 			cursor: 'pointer',
		// 		},
		// 	},
		// },
	},
});
