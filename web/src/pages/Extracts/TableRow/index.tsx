import { Fragment, type FunctionComponent } from 'react';

import type { Extract } from '~/models/Extract';
import type { TableData } from '~/models/Table';

interface TableRowProps {
	item: TableData<Extract>;
}

export const TableRow: FunctionComponent<TableRowProps> = ({ item }) => {
	return (
		<Fragment>
			<tr>
				<td>{item.template}</td>
				<td>{item.entity}</td>
				<td>{item.collumn}</td>
				<td>{item.value}</td>
			</tr>
		</Fragment>
	);
};
