import type { Theme } from '@mui/material';
import { styled, Switch as SwitchMui } from '@mui/material';

export const Switch = styled(SwitchMui)(({ theme }) => ({
	width: 48,
	height: 28,
	padding: 0,

	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 3,
		transitionDuration: '300ms',

		'&.Mui-checked': {
			transform: 'translateX(20px)',
			color: '#fff',

			'& + .MuiSwitch-track': {
				backgroundColor: '#F4F4F4',
				border: '2px solid #34C84A',
				opacity: 1,
			},

			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},

			'& .MuiSwitch-thumb': {
				backgroundColor: '#34C84A',
			},
		},

		'&.Mui-focusVisible .MuiSwitch-thumb': {
			border: '6px solid #34C84A',
		},

		'&.Mui-disabled + .MuiSwitch-track': {
			opacity: 0.7,
		},
	},

	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 22,
		height: 22,

		backgroundColor: '#3D465C',
	},

	'& .MuiSwitch-track': {
		borderRadius: 26 / 2,
		backgroundColor: '#E9E9EA',
		opacity: 1,

		border: '2px solid #3D465C',

		transition: (theme as Theme).transitions.create(['background-color'], {
			duration: 500,
		}),
	},
}));
