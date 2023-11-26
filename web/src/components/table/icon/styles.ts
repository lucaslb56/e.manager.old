import styled from '@emotion/styled';
import type { Theme } from '@mui/material';
import { Button } from '@mui/material';

export const Container = styled(Button)(({ theme, variant }) => ({
	backgroundColor:
		variant === 'contained'
			? '#F4F4F4'
			: (theme as Theme).palette.background.default,

	':hover': {
		backgroundColor:
			variant === 'contained'
				? '#F4F4F499'
				: (theme as Theme).palette.background.default,
	},
}));
