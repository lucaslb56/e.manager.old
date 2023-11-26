import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)({
	display: 'flex',
	alignItems: 'center',
	gap: '1rem',
	color: '#F4F4F4',
	padding: '0.5rem 1rem',
	fontSize: '1.125rem',
	textDecoration: 'none',
	borderRadius: '1rem',
	width: '100%',
	border: '1px solid transparent',

	':hover': {
		borderColor: '#4256D0',
		transition: 'all 0.2s ease',
	},

	'&.active': {
		backgroundColor: '#4256D0',
	},
});
