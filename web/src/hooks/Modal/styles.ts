import styled from 'styled-components';

import type { ThemeKeyType } from '~/models/Theme';

export const Title = styled.h1`
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1rem;
	color: ${({ theme }): ThemeKeyType => theme['indigo-600']};
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	svg {
		cursor: pointer;
		color: ${({ theme }): ThemeKeyType => theme['indigo-600']};
	}
`;

export const Body = styled.div`
	max-width: 44.25rem;
	width: 100%;
	position: absolute;
	border-radius: 5px;
	background: ${({ theme }): ThemeKeyType => theme.white};
	padding: 1rem;
	left: 50%;
	top: 20%;
	transform: translate(-50%, -20%);
`;

export const Content = styled.div`
	flex: 1;
	padding: 1rem 0;
`;
