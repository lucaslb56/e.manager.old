import type { TableProps } from '@mui/material';
import { TableContainer } from '@mui/material';
import type { ReactElement } from 'react';

import { Container } from './styles';

interface RootProps extends TableProps {}

export function Root({ children, ...rest }: RootProps): ReactElement {
	return (
		<TableContainer style={{ paddingTop: '2rem' }}>
			<Container
				aria-label="collapsible table"
				{...rest}
			>
				{children}
			</Container>
		</TableContainer>
	);
}
