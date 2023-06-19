import { Eye } from 'phosphor-react';
import type { FunctionComponent } from 'react';

import { ViewButton } from './styles';

import { Input, MenuItem } from '~/components/Mui';
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
				<Input
					select
					size="small"
					variant="standard"
					defaultValue={item.active ? 'active' : 'inactive'}
					onChange={(event): void => console.log(event.target.value)}
				>
					<MenuItem value="active">Ativo</MenuItem>
					<MenuItem value="inactive">Inativo</MenuItem>
				</Input>
			</td>
			<td>
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
