import { Eye } from 'phosphor-react';
import { Fragment, type FunctionComponent } from 'react';

import { View } from '../Modal/View';

import { ViewButton } from './styles';

import { Input, MenuItem } from '~/components/Mui';
import { useModal } from '~/hooks/Modal';
import type { TableData } from '~/models/Table';
import type { Template } from '~/models/Template';

interface TableRowProps {
	item: TableData<Template>;
}

export const TableRow: FunctionComponent<TableRowProps> = ({ item }) => {
	const { Modal, open } = useModal();

	function handleOpenViewTemplateModal(): void {
		open({
			component: (
				<View
					template={{ id: item.id, name: item.name, version: item.version }}
				/>
			),
			title: 'Visualizar template',
		});
	}

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
					<ViewButton onClick={handleOpenViewTemplateModal}>
						<Eye
							fill="bold"
							size={14}
						/>
					</ViewButton>
				</td>
			</tr>
			<Modal />
		</Fragment>
	);
};
