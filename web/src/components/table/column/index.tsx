import type { TableCellProps } from '@mui/material';
import { TableCell } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

interface ColumnProps extends TableCellProps {
	children?: ReactNode;
}

export function Column({ children, ...rest }: ColumnProps): ReactElement {
	return <TableCell {...rest}>{children}</TableCell>;
}
