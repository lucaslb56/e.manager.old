/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const TableContainer = styled.div`
	flex: 1;
	overflow-y: auto;
	min-height: 65vh;
	width: 100%;

	table {
		width: inherit;
		/* height: inherit; */
		border-collapse: collapse;
		border-spacing: 0;

		thead {
			position: sticky;
			top: 0;
			background: ${({ theme }) => theme['indigo-600']};
		}

		tr {
			height: 2.5rem;

			&:has(th) {
				color: ${({ theme }) => theme['white']};
				font-weight: 500;
				font-size: 1rem;
			}

			&:has(td) {
				font-weight: 400;
				font-size: 0.875rem;
				color: ${({ theme }) => theme['gray-800']};
			}

			th,
			td {
				padding-left: 1.25rem;
			}

			td {
				&:last-child {
					height: 2.5rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-right: 1rem;
				}
			}

			th {
				text-align: left;

				&:first-child {
					border-top-left-radius: 4px;
					border-bottom-left-radius: 4px;
				}

				&:last-child {
					border-top-right-radius: 4px;
					border-bottom-right-radius: 4px;
				}
			}

			&:nth-child(even) {
				background: ${({ theme }) => theme['gray-100']};
			}
		}

		> tbody {
			tr {
				&:hover {
					background: ${({ theme }) => theme['gray-200']};
				}
			}
		}
	}
`;
