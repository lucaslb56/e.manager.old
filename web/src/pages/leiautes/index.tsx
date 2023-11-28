import {
	Box,
	Button,
	Container,
	Pagination,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { MagnifyingGlass, Plus, X } from '@phosphor-icons/react';
import type { ChangeEvent, ReactElement } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { List } from './table/list';

import { Grid, Loading } from '~/components';
import { useLeiautePaginate } from '~/hooks';
import type { LeiauteQuery, QueryType, QueryValueType } from '~/models';

const labels = ['Nome', 'Prefixo', 'Versão', 'Status'];

export function Leiautes(): ReactElement {
	// const fileInput = useRef<HTMLInputElement | null>(null);

	const [search, setSearch] = useState<string>('');

	const [queryParams, setQueryParams] = useState<LeiauteQuery>({
		limit: 15,
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
			<Stack>
				<Typography
					variant="h4"
					component="h1"
				>
					Leiautes
				</Typography>
			</Stack>

			<Box>
				<Grid.Root>
					<Grid.Item
						xl={8}
						xs={8}
						sm={6}
					>
						<TextField
							size="small"
							fullWidth
							placeholder="Pesquisar por nome ou prefixo"
							onChange={changeSearch}
							value={search}
						/>
					</Grid.Item>

					<Grid.Item
						xl={2}
						xs={2}
						sm={3}
					>
						<Button
							fullWidth
							size="medium"
							variant="contained"
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
						</Button>
					</Grid.Item>

					<Grid.Item
						xl={2}
						xs={2}
						sm={3}
					>
						<Button
							fullWidth
							size="medium"
							variant="contained"
							endIcon={
								<Plus
									size={18}
									weight="bold"
								/>
							}
							// onClick={(): void => fileInput.current?.click()}
						>
							Novo
						</Button>
						{/* <input
						ref={fileInput}
						type="file"
						accept="text/xml"
						style={{ display: 'none' }}
					/> */}
					</Grid.Item>
				</Grid.Root>

				{isLoading && <Loading />}

				{isSuccess && !(list_data.data.length > 0) && (
					<Box marginTop="1rem">
						<Typography variant="h6">Nenhum registro encontrado</Typography>
					</Box>
				)}

				{isSuccess && list_data.data.length > 0 && (
					<Stack>
						<List
							data={list_data.data}
							labels={labels}
						/>

						{list_data.meta.total > list_data.meta.per_page && (
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
						)}
					</Stack>
				)}
			</Box>
		</Container>
	);
}
