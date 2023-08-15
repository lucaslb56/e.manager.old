import { DownloadSimple } from 'phosphor-react';
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
				<td>{item.xml_id}</td>
				<td>
					{item.accumulation}
					<DownloadSimple
						size={20}
						cursor={'pointer'}
						onClick={(): Window | null =>
							window.open(
								`${
									import.meta.env.VITE_API_BASE_URL
								}/extract/export-to-csv?_id=${item.xml_id}&prefix=${
									item.template
								}`,
							)
						}
					/>
				</td>
			</tr>
		</Fragment>
	);
};
