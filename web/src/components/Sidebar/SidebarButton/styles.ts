/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonLinkContainer = styled(NavLink)`
	width: 13.5rem;
	height: 2.1875rem;
	border-radius: 10px;
	text-decoration: none;
	color: ${({ theme }) => theme['white']};
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding-left: 2.25rem;
	border: 1px solid transparent;

	&:hover {
		border: 1px solid ${({ theme }) => theme['white']};
	}

	&.active {
		background: ${({ theme }) => theme['indigo-700']};
	}

	&:last-child {
		/* position: absolute; */
		/* bottom: 12rem; */
	}
`;
