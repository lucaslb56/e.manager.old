import { CaretDown, Eye } from 'phosphor-react';
import type { FunctionComponent } from 'react';

import { ViewButton } from './styles';

import { MenuItem, Select } from '~/components/Mui';
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
				<Select
					defaultValue={item.active ? 'Ativo' : 'Inativo'}
					value={10}
					onChange={(): void => console.log('onChange')}
					input={<CaretDown size={20} />}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>

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
