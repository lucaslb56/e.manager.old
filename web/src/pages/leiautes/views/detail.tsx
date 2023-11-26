/* eslint-disable no-unused-vars */
import {
	Box,
	Container,
	Grid,
	MenuItem,
	Stack,
	Typography,
} from '@mui/material';
import { CaretDown, CaretLeft, Download } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Header, Loading, Mui } from '~/components';
import {
	KEYS,
	queryClient,
	useColumnList,
	useLeiauteReport,
	useToggleActiveLeiaute,
} from '~/hooks';
import type { Leiaute, LeiautePrefix, LeiauteVersion } from '~/models';
import { ColumnNormalize, LeiauteStatusList } from '~/models';

interface UseLocation {
	state: {
		leiaute: Leiaute;
	};
}

export enum LeiauteKeyMap {
	name = 'Nome',
	version = 'Versão em vigor',
	prefix = 'Prefixo E-social',
}

export function Detail(): ReactElement {
	const {
		state: { leiaute },
	} = useLocation() as UseLocation;

	const navigate = useNavigate();

	const {
		data: column_list,
		isSuccess,
		isLoading,
	} = useColumnList({
		prefix: leiaute.prefix as LeiautePrefix,
		version: leiaute.version as LeiauteVersion,
	});

	const { mutateAsync: report } = useLeiauteReport();

	function onError(): void {
		toast.error('Houve um erro ao tentar atualizar status.');
	}

	function onSuccess(): void {
		queryClient.invalidateQueries([KEYS['LEIAUTE-PAGINATE-LIST']]);
		toast.success('Status atualizado com sucesso.');
	}

	const { mutateAsync: toggleStatus } = useToggleActiveLeiaute({
		onError,
		onSuccess,
	});

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
				<Box
					display="flex"
					flex="1"
					justifyContent="space-between"
					alignItems="center"
				>
					<Stack
						direction="row"
						alignItems="center"
						gap={2}
						style={{
							cursor: 'pointer',
						}}
						component="div"
						onClick={(): void => navigate(-1)}
					>
						<CaretLeft
							size={36}
							weight="bold"
						/>
						<Header.Title variant="h4">Detalhes de leiaute</Header.Title>
					</Stack>

					<Stack
						direction="row"
						alignItems="center"
						gap={2}
					>
						<Mui.Button
							disabled={!leiaute.active}
							size="medium"
							endIcon={<Download weight="bold" />}
							onClick={(): Promise<void> =>
								report({
									prefix: leiaute.prefix as LeiautePrefix,
									version: leiaute.version as LeiauteVersion,
									export_type: 'csv',
								})
							}
						>
							Baixar extrações
						</Mui.Button>

						<Mui.TextField
							value={leiaute.active ? 'active' : 'inactive'}
							onChange={(): void => {
								toggleStatus(leiaute.id);
								navigate(-1);
							}}
							size="small"
							select
							SelectProps={{
								IconComponent: CaretDown,
							}}
						>
							{LeiauteStatusList.map((status) => (
								<MenuItem
									value={status.value}
									key={status.id}
								>
									{status.label}
								</MenuItem>
							))}
						</Mui.TextField>
					</Stack>
				</Box>
			</Header.Root>

			<Grid
				paddingTop={3}
				container
				spacing={2}
			>
				{Object.entries(leiaute)
					.filter(([key]) => key in LeiauteKeyMap)
					.map(([key, value]) => (
						<Grid
							item
							key={key}
							xl={4}
							xs={6}
						>
							<Stack
								padding={1}
								gap={1}
								color="#F4F4f4"
								style={{ background: '#5C73DB99', borderRadius: '8px' }}
								height={'100%'}
							>
								<Typography
									variant="body1"
									fontWeight="bold"
									color="#F4F4f4"
								>
									{LeiauteKeyMap[key as keyof typeof LeiauteKeyMap]}
								</Typography>
								{value}
							</Stack>
						</Grid>
					))}
			</Grid>

			<Stack
				direction="column"
				paddingTop={2}
				gap={2}
			>
				<Typography variant="h5">Tags/Colunas</Typography>

				{isSuccess && !(column_list.columns.length > 0) && (
					<Box marginTop="1rem">
						<Typography variant="h6">
							Nenhum registro encontrado, por favor ative e configure o leiaute
						</Typography>
					</Box>
				)}

				{isLoading && <Loading />}

				{isSuccess && column_list.columns.length > 0 && (
					<Stack
						// maxHeight=""
						style={{
							height: 'calc(100vh - 40vh - 5rem)',
							overflowY: 'auto',
							overflowX: 'hidden',
						}}
					>
						<Grid
							container
							spacing={2}
						>
							{column_list.columns.map((item) => (
								<Grid
									item
									key={item.key}
									xl={4}
									xs={6}
								>
									<Stack
										padding={1}
										color="#F4F4f4"
										style={{ background: '#5C73DB99', borderRadius: '8px' }}
										height={'100%'}
									>
										<Typography
											variant="body1"
											fontWeight="bold"
											color="#F4F4f4"
										>
											{item.key}
										</Typography>
										<Typography
											variant="body1"
											color="#F4F4f4"
										>
											{ColumnNormalize[item.type]}
										</Typography>
									</Stack>
								</Grid>
							))}
						</Grid>
					</Stack>
				)}
			</Stack>
		</Container>
	);
}
