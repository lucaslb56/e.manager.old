/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';

export const SigninContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
`;

export const SigninForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;

	max-width: 32.5rem;
	width: 100%;
`;

export const FormGroupBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const FormInputBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	flex: 1;

	span {
		color: ${({ theme }) => theme['red-400']};
		font-weight: 400;
		font-size: 0.875rem;
	}
`;

export const FormInputControl = styled.div<{ error?: boolean }>`
	width: 100%;
	position: relative;
	height: 3.0625rem;

	input {
		position: absolute;
		width: inherit;
		height: inherit;
		border-radius: 12px;
		border: 1px solid transparent;
		box-shadow: 0 0 0 1px ${({ theme }) => theme['gray-200']};
		padding: 0 1rem;

		font-weight: 400;
		font-size: 0.875rem;

		&::placeholder {
			color: ${({ theme }) => theme['gray-400']};
		}

		${({ error }) =>
			error &&
			css`
				box-shadow: 0 0 0 1px ${({ theme }) => theme['red-400']};
			`}
	}

	svg {
		position: absolute;
		right: 1rem;
		top: 1rem;
		cursor: pointer;

		color: ${({ theme }) => theme['gray-600']};

		${({ error }) =>
			error &&
			css`
				color: ${({ theme }) => theme['red-600']};
			`}
	}
`;

export const FormHeaderBox = styled.div`
	h1 {
		color: ${({ theme }) => theme['indigo-700']};
	}

	p {
		font-weight: 500;
		font-size: 1.25rem;
	}
`;

export const FormButtonBox = styled.div`
	flex: 1;

	button {
		width: 100%;
		height: 3rem;
		border-radius: 12px;
		border: 1px solid transparent;
		background: ${({ theme }) => theme['indigo-600']};
		color: ${({ theme }) => theme['white']};
		font-weight: 400;
		font-size: 1.125rem;
	}
`;
