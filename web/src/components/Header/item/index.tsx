import { Grid, type GridProps } from '@mui/material';
import type { ReactElement } from 'react';

interface ItemProps extends Omit<GridProps, 'item'> {}

export function Item({ children, ...rest }: ItemProps): ReactElement {
	return (
		<Grid item {...rest}>
			{children}
		</Grid>
	);
}
