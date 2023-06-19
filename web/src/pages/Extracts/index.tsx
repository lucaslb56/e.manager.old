import { Pagination, Stack } from '@mui/material';
import type { ChangeEvent, ReactElement } from 'react';
import { Fragment, useEffect, useState } from 'react';

import { Create } from './Modal/Create';
import { TemplatesContainer } from './styles';
import { TableRow } from './TableRow';

import { Header } from '~/components/Header';
import { Loading } from '~/components/Loading';
import { Table } from '~/components/Table';
import { useModal } from '~/hooks/Modal';
import { useExtractList } from '~/hooks/query/extracts/list';
import type { QueryParams, QueryType, QueryValueType } from '~/models/Params';

export function Extracts(): ReactElement {
	const [query, setQuery] = useState<QueryParams>({
		limit: 10,
		order: 'asc',
		page: 1,
	});

	const { Modal, open, close } = useModal();

	const [search, setSearch] = useState('');

	const { data: extracts, isLoading, isSuccess } = useExtractList(query);

	function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
		setSearch(event.target.value);
	}

	function handleOpenNewTemplateModal(): void {
		open({
			component: <Create close={close} />,
			title: 'Novo template',
		});
	}

	function handleQuery<T extends QueryType>(
		key: T,
		value: QueryValueType<T>,
	): void {
		setQuery((state) => ({ ...state, [key]: value }));
	}

	useEffect(() => {
		if (!search) setQuery((state) => ({ ...state, search: undefined }));
	}, [search, setQuery]);

	return (
		<TemplatesContainer>
			<h1>Transmissões</h1>
			<Header
				createClick={handleOpenNewTemplateModal}
				searchClick={(): void => handleQuery('search', search)}
				searchChange={handleSearch}
				placeholder="Pesquise por nome"
			/>

			{isLoading && <Loading />}

			{isSuccess && (
				<Fragment>
					<Table
						headers={['Template', 'Entidade', 'Coluna', 'Valor']}
						Row={TableRow}
						data={extracts?.data}
					/>

					<Stack
						spacing={2}
						style={{ margin: '0 auto' }}
					>
						<Pagination
							count={extracts?.meta?.last_page}
							page={extracts?.meta?.current_page}
							onChange={(_, page): void => handleQuery('page', page)}
							variant="outlined"
							shape="rounded"
							color="primary"
						/>
					</Stack>
				</Fragment>
			)}

			<Modal />
		</TemplatesContainer>
	);
}
