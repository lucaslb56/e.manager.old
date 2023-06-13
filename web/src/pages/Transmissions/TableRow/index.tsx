/* eslint-disable no-undef */
import { Eye } from 'phosphor-react';
import type { FunctionComponent } from 'react';

import { ViewButton } from './styles';

import type { TableData } from '~/models/Table';
import type { Template } from '~/models/Template';

interface TableRowProps {
	item: TableData<Template>;
}

export const TableRow: FunctionComponent<TableRowProps> = ({ item }) => {
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.version}</td>
			<td>
				{item.active ? 'Ativo' : 'Inativo'}

				<ViewButton>
					<Eye
						fill="bold"
						size={14}
					/>
				</ViewButton>
			</td>
		</tr>
	);
};
