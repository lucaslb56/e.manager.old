/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const ButtonGroup = styled.div`
	flex: 1;
	display: flex;
	gap: 1rem;
	justify-content: flex-end;
`;

const Button = styled.button`
	line-height: 0;
	height: 1.5rem;
	width: 1.5rem;
	border-radius: 4px;
	border: 1px solid transparent;
	cursor: pointer;
	svg {
		color: ${({ theme }) => theme['white']};
	}
`;

export const EditButton = styled(Button)`
	background: ${({ theme }) => theme['indigo-600']};
`;

export const DeleteButton = styled(Button)`
	background: ${({ theme }) => theme['red-600']};
`;
