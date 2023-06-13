import { CaretDown, PencilSimple, Trash } from 'phosphor-react';
import type { FunctionComponent } from 'react';
import { Fragment } from 'react';

import { Delete } from '../Modal/Delete';
import { Edit } from '../Modal/Edit';

import { ButtonGroup, DeleteButton, EditButton } from './styles';

import { MenuItem, Select } from '~/components/Mui';
import { useModal } from '~/hooks/Modal';
import type { TableData } from '~/models/Table';
import type { User } from '~/models/User';

interface TableRowProps {
	item: TableData<User>;
}

export const TableRow: FunctionComponent<TableRowProps> = ({ item }) => {
	const { Modal, close, open } = useModal();

	function handleOpenEditUserModal(): void {
		open({
			component: (
				<Edit
					close={close}
					user={item}
				/>
			),
			title: 'Editar usuário',
		});
	}

	function handleOpenDeleteUserModal(): void {
		open({
			component: (
				<Delete
					close={close}
					user={item}
				/>
			),
			title: 'Remover usuário',
		});
	}

	return (
		<Fragment>
			<tr>
				<td>{item.name}</td>
				<td>{item.email}</td>
				<td>
					<Select
						defaultValue={item.active ? 'Ativo' : 'Inativo'}
						value={item.active ? 'Ativo' : 'Inativo'}
						onChange={(): void => console.log('onChange')}
						IconComponent={CaretDown}
						size="small"
					>
						<MenuItem value={'Ativo'}>Ativo</MenuItem>
						<MenuItem value={'Inativo'}>Inativo</MenuItem>
					</Select>

					<ButtonGroup>
						<EditButton onClick={handleOpenEditUserModal}>
							<PencilSimple
								fill="bold"
								size={16}
							/>
						</EditButton>

						<DeleteButton onClick={handleOpenDeleteUserModal}>
							<Trash
								fill="bold"
								size={16}
							/>
						</DeleteButton>
					</ButtonGroup>
				</td>
			</tr>
			<Modal />
		</Fragment>
	);
};
