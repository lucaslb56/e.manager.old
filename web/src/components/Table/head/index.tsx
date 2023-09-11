import type { TableHeadProps } from '@mui/material';
import type { ReactElement } from 'react';

import { Container } from './styles';

interface HeadProps extends TableHeadProps {}

export function Head({ children, ...rest }: HeadProps): ReactElement {
	return <Container {...rest}>{children}</Container>;
}
