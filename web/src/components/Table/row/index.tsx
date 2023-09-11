import type { TableRowProps } from '@mui/material';
import type { ReactElement } from 'react';

import { Container } from './styles';

interface RowProps extends TableRowProps {}

export function Row({ children, ...rest }: RowProps): ReactElement {
	return <Container {...rest}>{children}</Container>;
}
