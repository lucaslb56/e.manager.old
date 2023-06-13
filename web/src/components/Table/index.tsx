import type { FunctionComponent, ReactElement } from 'react';

import { TableContainer } from './styles';

import type { TableDataType } from '~/models/Table';

interface TableRow<T> {
	item: T;
}

interface TableProps<T extends TableDataType> {
	headers: string[];
	data: T[];
	Row: FunctionComponent<TableRow<T>>;
}

export function Table<T extends TableDataType>({
	Row,
	data,
	headers,
}: TableProps<T>): ReactElement {
	return (
		<TableContainer>
			<table>
				<thead>
					<tr>
						{headers.map((header) => (
							<th key={header}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<Row
							item={item}
							key={item.id}
						/>
					))}
				</tbody>
			</table>
		</TableContainer>
	);
}
