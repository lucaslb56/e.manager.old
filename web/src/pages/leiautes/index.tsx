import { Box, Container, Pagination, Stack, Typography } from '@mui/material';
import { MagnifyingGlass, Plus, X } from 'phosphor-react';
import type { ChangeEvent, ReactElement } from 'react';
import { Fragment, useCallback, useEffect, useState } from 'react';

import { List } from './table/list';

import { Header } from '~/components/Header';
import { Loading } from '~/components/Loading';
import { Mui } from '~/components/Mui';
import { useLeiautePaginate } from '~/hooks/query/leiaute/paginate';
import type { LeiauteQuery } from '~/models/Leiaute';
import type { QueryType, QueryValueType } from '~/models/Query';

const labels = ['Nome', 'Prefixo', 'Versão', 'Status'];

export function Leiautes(): ReactElement {
	// const fileInput = useRef<HTMLInputElement | null>(null);

	const [search, setSearch] = useState<string>('');

	const [queryParams, setQueryParams] = useState<LeiauteQuery>({
		limit: 8,
	} as LeiauteQuery);

	const {
		data: list_data,
		isLoading,
		isSuccess,
	} = useLeiautePaginate(queryParams);

	function handleQuery<T extends QueryType<LeiauteQuery>>(
		key: T,
		value: QueryValueType<LeiauteQuery, T>,
	): void {
		setQueryParams((state) => ({ ...state, [key]: value }));
	}

	const handleClear = useCallback(() => {
		setSearch('');
		handleQuery('search', undefined);
	}, []);

	function changeSearch(event: ChangeEvent<HTMLInputElement>): void {
		setSearch(event.target.value);
	}

	const handleSearch = useCallback(() => {
		handleQuery('search', search);
	}, [search]);

	useEffect(() => {
		if (!search) handleQuery('search', undefined);
	}, [search]);

	return (
		<Container
			maxWidth="xl"
			style={{
				paddingTop: '5rem',
				paddingBottom: '2rem',
				height: '100vh',
				overflowY: 'auto',
			}}
		>
			<Header.Root>
				<Header.Title
					variant="h4"
					component="h1"
				>
					Leiautes
				</Header.Title>

				<Header.Item
					xl={8}
					xs={8}
					sm={6}
				>
					<Mui.TextField
						size="small"
						fullWidth
						placeholder="Pesquisar por nome ou prefixo"
						onChange={changeSearch}
						value={search}
					/>
				</Header.Item>

				<Header.Item
					xl={2}
					xs={2}
					sm={3}
				>
					<Mui.Button
						fullWidth
						size="medium"
						endIcon={
							queryParams.search ? (
								<X
									size={18}
									weight="bold"
								/>
							) : (
								<MagnifyingGlass
									size={18}
									weight="bold"
								/>
							)
						}
						onClick={queryParams.search ? handleClear : handleSearch}
					>
						{queryParams.search && 'Limpar'}
						{!queryParams.search && 'Buscar'}
					</Mui.Button>
				</Header.Item>

				<Header.Item
					xl={2}
					xs={2}
					sm={3}
				>
					<Mui.Button
						fullWidth
						size="medium"
						endIcon={
							<Plus
								size={18}
								weight="bold"
							/>
						}
						// onClick={(): void => fileInput.current?.click()}
					>
						Novo
					</Mui.Button>
					{/* <input
						ref={fileInput}
						type="file"
						accept="text/xml"
						style={{ display: 'none' }}
					/> */}
				</Header.Item>
			</Header.Root>

			{isLoading && <Loading />}

			{isSuccess && !(list_data.data.length > 0) && (
				<Box marginTop="1rem">
					<Typography variant="h6">Nenhum registro encontrado</Typography>
				</Box>
			)}

			{isSuccess && list_data.data.length > 0 && (
				<Fragment>
					<List
						data={list_data.data}
						labels={labels}
					/>
					<Stack
						alignItems={'flex-end'}
						direction={'column'}
						paddingTop={2}
					>
						<Pagination
							count={list_data.meta.last_page}
							page={list_data.meta.current_page}
							onChange={(_, page): void => handleQuery('page', page)}
							color="primary"
						/>
					</Stack>
				</Fragment>
			)}
		</Container>
	);
}
