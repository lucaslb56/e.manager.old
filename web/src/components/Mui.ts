import * as Mui from '@mui/material';
import { styled } from '@mui/material/styles';

import { defaultTheme } from '~/styles/themes/default';

export const Modal = styled(Mui.Modal)`
	border: 0;
	background: rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 0 1px transparent;
`;

export const Input = styled(Mui.TextField)`
	flex: 1;
	width: 100%;

	&:focus {
		border-color: red;
	}

	input,
	label {
		font: 400 1rem 'Inter', sans-serif;
	}

	input {
		box-shadow: 0 0 0 1px transparent;
	}

	fieldset {
		border: 1px solid ${defaultTheme['indigo-600']};
	}
`;

export const Button = styled(Mui.Button)`
	font: 400 'Inter', sans-serif;
	display: flex;
	gap: 0.5rem;
`;

export const Box = styled(Mui.Box)``;

export const Grid = styled(Mui.Grid)`
	flex: 1;
`;

export const Stack = styled(Mui.Stack)`
	flex: 1;
`;

export const CircularProgress = styled(Mui.CircularProgress)``;

export const Select = styled(Mui.Select)`
	font: 400 'Inter', sans-serif;
	flex: 1;
`;
export const MenuItem = styled(Mui.MenuItem)`
	height: inherit;
	font: 400 'Inter', sans-serif;
`;
