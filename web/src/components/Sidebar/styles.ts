import { Stack, styled } from '@mui/material';

export const Container = styled('aside')({
	display: 'flex',
	flexDirection: 'column',
	// padding: '2rem 3rem',
	paddingTop: '4rem',
	paddingLeft: '3rem',
	paddingRight: '3rem',
	height: '100vh',
	gap: '4.31rem',
	background: '#0E1B6B',
});

export const Navbar = styled('nav')({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	width: '16rem',
});

export const Header = styled(Stack)({
	// background: '#E0E7FF',
	padding: '1rem',
	borderRadius: '1rem',
});
