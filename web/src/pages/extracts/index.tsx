import {
	Box,
	Button,
	Container,
	MenuItem,
	Pagination,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { CaretDown, MagnifyingGlass, Upload, X } from '@phosphor-icons/react';
import type { ChangeEvent, ReactElement } from 'react';
import { Fragment, useCallback, useEffect, useState } from 'react';

import { Modal } from './modal';
import { List } from './table';

import { Grid, Loading } from '~/components';
import type { UseModal } from '~/hooks';
import { useExtractPaginate, useLeiauteActiveList, useModal } from '~/hooks';
import type {
	LeiautePrefix,
	LeiauteVersion,
	QueryType,
	QueryValueType,
} from '~/models';
import { LeiauteVersionList, type LeiauteQuery } from '~/models';

const labels = ['E-Social ID', 'Evento', 'Leiaute', 'Versão', 'Registros'];

export function Extracts(): ReactElement {
	// const fileInput = useRef<HTMLInputElement | null>(null);
	const modal = useModal() as UseModal<null>;

	const {
		data: active_list,
		// isLoading: is_loading_active_list,
		isSuccess: is_success_active_list,
	} = useLeiauteActiveList();

	const [search, setSearch] = useState<string>('');

	const [queryParams, setQueryParams] = useState<LeiauteQuery>({
		limit: 15,
		prefix: 'S1000',
		version: 'S_1_0',
	} as LeiauteQuery);

	const {
		data: list_data,
		isLoading,
		isSuccess,
	} = useExtractPaginate(queryParams);

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
					Extrações
				</Typography>
			</Stack>

			<Box>
				<Grid.Root
					direction="row"
					justifyContent="flex-end"
				>
					<Grid.Item
						xl={8}
						xs={8}
						sm={6}
					>
						<TextField
							size="small"
							fullWidth
							placeholder="Pesquisar por Social ID ou Evento"
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
							endIcon={<Upload weight="bold" />}
							onClick={(): void => modal.open({ key: 'modal-import' })}
						>
							Enviar
						</Button>
					</Grid.Item>

					{is_success_active_list && active_list.length > 0 && (
						<Fragment>
							<Grid.Item
								xl={2}
								xs={2}
								sm={3}
							>
								<TextField
									onChange={(event): void =>
										handleQuery('prefix', event.target.value as LeiautePrefix)
									}
									fullWidth
									label="Prefixo"
									defaultValue={queryParams.prefix ?? ''}
									size="small"
									select
									SelectProps={{
										IconComponent: CaretDown,
									}}
								>
									<MenuItem
										value=""
										disabled
									>
										Selecione prefixo
									</MenuItem>

									{active_list.map((item) => (
										<MenuItem
											value={item.prefix}
											key={item.id}
										>
											{item.prefix}
										</MenuItem>
									))}
								</TextField>
							</Grid.Item>

							<Grid.Item
								xl={2}
								xs={2}
								sm={3}
							>
								<TextField
									onChange={(event): void =>
										handleQuery('version', event.target.value as LeiauteVersion)
									}
									fullWidth
									label="Versão"
									defaultValue={queryParams?.version ?? ''}
									size="small"
									select
									SelectProps={{
										IconComponent: CaretDown,
									}}
								>
									<MenuItem
										value=""
										disabled
									>
										Selecione versão
									</MenuItem>

									{LeiauteVersionList.map((item) => (
										<MenuItem
											value={item.value}
											key={item.id}
											disabled={item.value === 'S_1_1'}
										>
											{item.label}
										</MenuItem>
									))}
								</TextField>
							</Grid.Item>
						</Fragment>
					)}
				</Grid.Root>

				{isLoading && queryParams.prefix && queryParams.version && <Loading />}

				{!queryParams.prefix && !queryParams.version && (
					<Box marginTop="1rem">
						<Typography variant="h6">
							Informe prefixo e versão para buscar dados
						</Typography>
					</Box>
				)}

				{!isLoading && isSuccess && !(list_data.data.length > 0) && (
					<Stack sx={{ padding: '0.5rem' }}>
						<Typography
							variant="h6"
							fontWeight="normal"
						>
							Nenhum registro encontrado.
						</Typography>
					</Stack>
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

			{modal.key === 'modal-import' && (
				<Modal.Extract
					open={modal.isOpen}
					onClose={modal.close}
				/>
			)}
		</Container>
	);
}
