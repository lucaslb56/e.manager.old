/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const SidebarContainer = styled.aside`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 16rem;
	height: 100vh;
	background: ${({ theme }) => theme['indigo-600']};

	p {
		position: absolute;
		bottom: 2rem;
		color: ${({ theme }) => theme['white']};
		opacity: 0.15;
	}
`;

export const Navbar = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
	padding-top: 2rem;

	@media (max-width: 820px) {
		padding: 2rem 1rem;
	}
`;

export const SidebarHeader = styled.div`
	height: 4rem;
	color: ${({ theme }) => theme['white']};
	background: ${({ theme }) => theme['indigo-700']};
	display: flex;
	align-items: center;
	justify-content: center;
`;
