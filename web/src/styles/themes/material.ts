import {
	buttonBaseClasses,
	createTheme,
	typographyClasses,
} from '@mui/material';
import {
	pickersCalendarHeaderClasses,
	pickersDayClasses,
	pickersFadeTransitionGroupClasses,
} from '@mui/x-date-pickers';

export const MaterialTheme = createTheme({
	palette: {
		error: {
			main: '#991B1B',
		},
		primary: {
			main: '#5C73DB',
		},
		background: {
			default: '#F4F4F4',
			paper: '#F4F4F4',
		},
		text: {
			primary: '#5C73DB',
		},
	},

	typography: {
		allVariants: {
			color: '#5C73DB',
			fontFamily: 'Inter, sans-serif',
		},
	},

	shape: {
		borderRadius: 8,
	},

	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					// To DatePicker - initial
					[`& .${pickersCalendarHeaderClasses.root}`]: {
						[`& .${buttonBaseClasses.root}`]: {
							color: '#f4f4f4',
						},
					},

					[`& .${pickersFadeTransitionGroupClasses.root}`]: {
						[`& .${pickersDayClasses.today}`]: {
							border: '1px solid #f4f4f4',
						},

						[`& .${pickersDayClasses.disabled}`]: {
							color: '#f4f4f498 !important',
						},

						[`& .${typographyClasses.root}`]: {
							color: '#f4f4f498',
							fontWeight: 'bold',
						},
					},
					// To DatePicker - final
				},
			},
		},

		MuiCssBaseline: {
			styleOverrides: {
				':root': {
					'@media (max-width: 1090px)': {
						fontSize: '87.5%',
					},
				},
				body: {
					scrollbarColor: '#6b6b6b #2b2b2b',
					'&::-webkit-scrollbar, & *::-webkit-scrollbar': {
						backgroundColor: '#5C73DB44',
						width: '8px',
						height: '8px',
					},
					'&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
						borderRadius: 10,
						backgroundColor: '#5C73DB',
						minHeight: 24,
					},
					'&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
						{
							backgroundColor: '#959595ff',
						},
					'&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
						{
							backgroundColor: '#959595ff',
						},
					'&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
						{
							backgroundColor: '#959595ff',
						},
					'&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
						backgroundColor: '#2b2b2bff',
					},
				},
			},
		},
	},
});
