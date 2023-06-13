import { styled as MuiStyled } from '@mui/material/styles';
import styled from 'styled-components';

import * as Mui from '../Mui';

import { defaultTheme } from '~/styles/themes/default';

export const HeaderBox = styled.div`
	display: flex;
	gap: 2rem;
	justify-content: space-between;
`;

export const SearchBox = styled.div`
	display: flex;
	gap: 1rem;
	flex: 1;
	max-width: 80rem;
`;

export const Button = MuiStyled(Mui.Button)`
	background: ${defaultTheme['indigo-600']};
	color: ${defaultTheme['white']};
	&:hover {
		background: ${defaultTheme['indigo-700']};
		opacity: 0.9;
	}
`;
