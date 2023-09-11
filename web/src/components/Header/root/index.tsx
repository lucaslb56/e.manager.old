import { Grid, type GridProps } from '@mui/material';
import type { ReactElement } from 'react';

interface RootProps extends Omit<GridProps, 'container' | 'spacing'> {}
export function Root({ children, ...rest }: RootProps): ReactElement {
	return (
		<Grid
			container
			spacing={2}
			{...rest}
		>
			{children}
		</Grid>
	);
}
