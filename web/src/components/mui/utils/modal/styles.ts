import { Box, styled } from '@mui/material';

export const Container = styled(Box)({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
	padding: '1.5rem',
	background: '#f4f4f4',
	borderRadius: '16px',
	minWidth: '31.25rem',
});
