import { DownloadSimple } from 'phosphor-react';
import { Fragment, type FunctionComponent } from 'react';

import { Input, MenuItem } from '~/components/Mui';
import type { TableData } from '~/models/Table';
import type { Template } from '~/models/Template';

interface TableRowProps {
	item: TableData<Template>;
}

export const TableRow: FunctionComponent<TableRowProps> = ({ item }) => {
	return (
		<Fragment>
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
					<DownloadSimple
						fill="bold"
						size={20}
						cursor={'pointer'}
						onClick={(): Window | null =>
							window.open(
								`${
									import.meta.env.VITE_API_BASE_URL
								}/extract/export-to-csv?prefix=${item.prefix}`,
							)
						}
					/>
				</td>
			</tr>
		</Fragment>
	);
};
