import {
	Box,
	Container,
	MenuItem,
	Pagination,
	Stack,
	Typography,
} from '@mui/material';
import { CaretDown, MagnifyingGlass, Upload, X } from 'phosphor-react';
import type { ChangeEvent, ReactElement } from 'react';
import { Fragment, useCallback, useEffect, useState } from 'react';

import { Modal } from './modal/extract';
import { List } from './table/list';

import { Header } from '~/components/Header';
import { Loading } from '~/components/Loading';
import { Mui } from '~/components/Mui';
import { useLeiauteActiveList } from '~/hooks/query/leiaute/active-list';
import { useExtractPaginate } from '~/hooks/query/leiaute/extract-list-paginate';
import type { UseModal } from '~/hooks/store/modal';
import { useModal } from '~/hooks/store/modal';
import type { LeiautePrefix, LeiauteVersion } from '~/models/Leiaute';
import { LeiauteVersionList, type LeiauteQuery } from '~/models/Leiaute';
import type { QueryType, QueryValueType } from '~/models/Query';

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
		limit: 8,
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
			<Header.Root
				direction="row"
				justifyContent="flex-end"
			>
				<Header.Title
					variant="h4"
					component="h1"
				>
					Extrações
				</Header.Title>

				<Header.Item
					xl={8}
					xs={8}
					sm={6}
				>
					<Mui.TextField
						size="small"
						fullWidth
						placeholder="Pesquisar por Social ID ou Evento"
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
						endIcon={<Upload weight="bold" />}
						onClick={(): void => modal.open({ key: 'modal-import' })}
					>
						Enviar
					</Mui.Button>
				</Header.Item>

				{is_success_active_list && active_list.length > 0 && (
					<Fragment>
						<Header.Item
							xl={2}
							xs={2}
							sm={3}
						>
							<Mui.TextField
								onChange={(event): void =>
									handleQuery('prefix', event.target.value as LeiautePrefix)
								}
								fullWidth
								label="Prefixo"
								defaultValue={''}
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
							</Mui.TextField>
						</Header.Item>

						<Header.Item
							xl={2}
							xs={2}
							sm={3}
						>
							<Mui.TextField
								onChange={(event): void =>
									handleQuery('version', event.target.value as LeiauteVersion)
								}
								fullWidth
								label="Versão"
								defaultValue={''}
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
							</Mui.TextField>
						</Header.Item>
					</Fragment>
				)}
			</Header.Root>

			{isLoading && queryParams.prefix && queryParams.version && <Loading />}

			{!queryParams.prefix && !queryParams.version && (
				<Box marginTop="1rem">
					<Typography variant="h6">
						Informe prefixo e versão para buscar dados
					</Typography>
				</Box>
			)}

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
			{modal.key === 'modal-import' && (
				<Modal
					open={modal.isOpen}
					onClose={modal.close}
				/>
			)}
		</Container>
	);
}
