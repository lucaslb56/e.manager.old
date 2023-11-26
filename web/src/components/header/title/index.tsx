import { Typography, type TypographyProps } from '@mui/material';
import type { ReactElement } from 'react';

import { Item } from '../item';

interface TitleProps extends TypographyProps {}
export function Title({ children, ...rest }: TitleProps): ReactElement {
	return (
		<Item xs={12}>
			<Typography {...rest}>{children}</Typography>
		</Item>
	);
}
