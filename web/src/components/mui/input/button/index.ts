import type { ButtonProps } from '@mui/material';
import { Button as MuiButton, styled } from '@mui/material';

interface Props extends ButtonProps {
	MuiColor?: string;
	MuiBackground?: string;
}

export const Button = styled(MuiButton)<Props>(
	({ MuiBackground = '#4763E4', MuiColor = '#F4F4F4' }) => ({
		paddingLeft: '1rem',
		paddingRight: '1rem',
		backgroundColor: MuiBackground,
		boxShadow: 'none',
		color: MuiColor,

		':disabled': {
			backgroundColor: '#4763E499',
		},

		'&:hover': {
			backgroundColor: MuiBackground,
		},
	}),
);
