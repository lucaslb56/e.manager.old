/* eslint-disable no-unused-vars */
import {
	Box,
	Button,
	Container,
	Grid,
	MenuItem,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { CaretDown, CaretLeft, Download } from '@phosphor-icons/react';
import type { ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Loading } from '~/components';
import {
	KEYS,
	queryClient,
	useColumnList,
	useLeiauteReport,
	useToggleActiveLeiaute,
} from '~/hooks';
import { useGetLeiaute } from '~/hooks/query/leiaute/get-leiaute';
import type { LeiautePrefix, LeiauteVersion } from '~/models';
import { ColumnNormalize, LeiauteStatusList } from '~/models';

export enum LeiauteKeyMap {
	name = 'Nome',
	// version = 'Versão em vigor',
	prefix = 'Prefixo E-social',
}

export function Detail(): ReactElement {
	const { id } = useParams<{ id?: string }>();

	const { data: leiaute, isSuccess: useGetLeiauteIsSuccess } = useGetLeiaute({
		params: { id },
		onSuccess(data) {
			console.log(data);
		},
		onError(error) {
			console.log(error);
		},
	});

	const navigate = useNavigate();

	const {
		data: column_list,
		isSuccess,
		isLoading,
	} = useColumnList({
		prefix: leiaute?.prefix as LeiautePrefix,
		version: leiaute?.version.prefix as LeiauteVersion,
	});

	const { mutateAsync: report } = useLeiauteReport();

	const { mutateAsync: toggleStatus } = useToggleActiveLeiaute({
		onError(error) {
			toast.error('Houve um erro ao tentar atualizar status.');
		},
		onSuccess() {
			queryClient.invalidateQueries([KEYS['LEIAUTE-PAGINATE-LIST']]);
			toast.success('Status atualizado com sucesso.');
		},
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
					<Typography variant="h4">Detalhes de leiaute</Typography>
				</Stack>

				{useGetLeiauteIsSuccess && leiaute && (
					<Stack
						direction="row"
						alignItems="center"
						gap={2}
					>
						<Button
							disabled={!leiaute.active}
							size="medium"
							endIcon={<Download weight="bold" />}
							variant="contained"
							onClick={(): Promise<void> =>
								report({
									prefix: leiaute.prefix as LeiautePrefix,
									version: leiaute.version.prefix as LeiauteVersion,
									export_type: 'csv',
								})
							}
						>
							Baixar extrações
						</Button>

						<TextField
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
						</TextField>
					</Stack>
				)}
			</Box>

			<Grid
				paddingTop={3}
				container
				spacing={2}
			>
				{useGetLeiauteIsSuccess &&
					leiaute &&
					Object.entries(leiaute)
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
				<Grid
					item
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
							Versão em vigor
						</Typography>
						{leiaute?.version.prefix}
					</Stack>
				</Grid>
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
