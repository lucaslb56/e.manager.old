import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

import { Create } from './Modal/Create';
import { UsersContainer } from './styles';
import { TableRow } from './TableRow';

import { Header } from '~/components/Header';
import { Loading } from '~/components/Loading';
import { Table } from '~/components/Table';
import { useModal } from '~/hooks/Modal';
import { useUserList } from '~/hooks/query/user/list';

export function Users(): ReactElement {
	const { Modal, open, close } = useModal();
	const [search, setSearch] = useState('');

	const { data: users, isLoading, isSuccess } = useUserList();

	function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
		setSearch(event.target.value);
	}

	function handleOpenNewUserModal(): void {
		open({
			component: <Create close={close} />,
			title: 'Adicionar usuário',
		});
	}

	return (
		<UsersContainer>
			<h1>Usuários</h1>
			<Header
				createClick={handleOpenNewUserModal}
				searchClick={(): void => console.log('click')}
				searchChange={handleSearch}
				placeholder="Pesquise por nome"
			/>

			{isLoading && <Loading />}

			{isSuccess && (
				<Table
					headers={['Nome', 'E-mail', 'Status']}
					Row={TableRow}
					data={users.filter((item) =>
						search ? item.name.includes(search) : item,
					)}
				/>
			)}
			<Modal />
		</UsersContainer>
	);
}
