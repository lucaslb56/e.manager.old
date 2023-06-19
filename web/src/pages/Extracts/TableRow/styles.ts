/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const ViewButton = styled.button`
	line-height: 0;
	height: 1.3rem;
	width: 1.3rem;
	border-radius: 4px;
	background: ${({ theme }) => theme['indigo-600']};
	border: 1px solid transparent;
	cursor: pointer;

	svg {
		color: ${({ theme }) => theme['white']};
	}
`;
