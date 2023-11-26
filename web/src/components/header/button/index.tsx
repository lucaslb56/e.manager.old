import type { ButtonProps } from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import type { ReactElement } from 'react';

interface Props extends ButtonProps {}
export function Button({ children, ...rest }: Props): ReactElement {
	return <MuiButton {...rest}>{children}</MuiButton>;
}
