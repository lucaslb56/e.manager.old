/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Autocomplete,
	Box,
	Button,
	Container,
	FormControl,
	FormHelperText,
	MenuItem,
	Stack,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import { CaretDown, CaretLeft, Plus, X } from '@phosphor-icons/react';
import { Fragment, type ReactElement } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Modal } from '../modal';

import { Grid } from '~/components';
import { useModal, useVersionList } from '~/hooks';
import { useCreateLeiaute } from '~/hooks/query/leiaute/create';
import { addEditIconToAutoCompleteEndAdornment } from '~/utils/change-components';
import { LeiautePrefixInputMask } from '~/utils/mask-input';

const NodeChildSchema = z.object({
	name: z.string().min(1, { message: 'Informe item.' }),
	type: z.enum(['string', 'number']),
});

const NodeSchema = z.object({
	name: z.string().min(1, { message: 'Informe item.' }),
	children: z.array(NodeChildSchema),
});

const RegexLeiautePrefix = new RegExp(/^S\d{4}$/);
const RegexLeiauteVersion = new RegExp(/^S_\d_\d$/);

const LeiauteSchema = z.object({
	name: z.string().min(1, { message: 'Informe nome do leiaute.' }),
	prefix: z
		.string()
		.regex(RegexLeiautePrefix, 'Por favor, informe um prefixo válido'),
	version: z
		.string({
			errorMap: () => ({ message: 'Por favor, informe versão.' }),
		})
		.regex(RegexLeiauteVersion, 'Por favor, informe uma versão válida.'),
	nodes: z.array(NodeSchema),
});

type LeiauteType = z.infer<typeof LeiauteSchema>;

const children_types: Pick<z.infer<typeof NodeChildSchema>, 'type'>[] = [
	{
		type: 'number',
	},
	{
		type: 'string',
	},
];

export function Create(): ReactElement {
	const navigate = useNavigate();
	const modal = useModal();
	const theme = useTheme();
	const {
		register,
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<LeiauteType>({
		mode: 'onSubmit',
		resolver: zodResolver(LeiauteSchema),
		defaultValues: {
			version: 'S_1_0',
			prefix: 'S1234',
			nodes: [
				{
					name: '',
					children: [
						{
							name: 'Child 1',
							type: 'number',
						},
					],
				},
			],
		},
	});

	const { fields, append } = useFieldArray({ control, name: 'nodes' });

	const { mutateAsync: createLeiaute } = useCreateLeiaute({
		onSuccess(data) {
			console.log(data);
		},
		onError(error) {
			console.log(error);
		},
	});

	function handleCreate(data: LeiauteType): void {
		createLeiaute(data);
	}

	const { data: version_list, isSuccess: versionListIsSuccess } =
		useVersionList();

	return (
		<Container
			maxWidth="xl"
			style={{
				paddingTop: '5rem',
				paddingBottom: '2rem',
				height: '100vh',
				overflowY: 'hidden',
			}}
		>
			<Box sx={{ overflowY: 'hidden' }}>
				<Stack
					direction="row"
					alignItems="center"
					gap={2}
					component="div"
					onClick={(): void => navigate(-1)}
					sx={{
						cursor: 'pointer',
						width: 'max-content',
					}}
				>
					<CaretLeft
						size={36}
						weight="bold"
					/>
					<Typography variant="h4">Novo Leiaute</Typography>
				</Stack>

				<Stack
					component="form"
					onSubmit={handleSubmit(handleCreate)}
					padding={2}
					sx={{ overflowY: 'auto', maxHeight: '100vh' }}
				>
					<Grid.Root>
						<Grid.Item xs={4}>
							<TextField
								size="small"
								fullWidth
								placeholder="Nome"
								error={!!errors.name}
								{...register('name')}
							/>
						</Grid.Item>
						<Grid.Item xs={4}>
							<FormControl fullWidth>
								<TextField
									label="Prefixo"
									placeholder="S0000"
									size="small"
									fullWidth
									error={!!errors.prefix}
									aria-describedby="prefix-helper-text"
									InputProps={{
										inputComponent: LeiautePrefixInputMask,
									}}
									{...register('prefix')}
								/>
								<FormHelperText
									id="prefix-helper-text"
									variant="standard"
									error={!!errors.prefix}
									sx={{
										textAlign: 'right',
									}}
								>
									{errors.prefix?.message ?? ' '}
								</FormHelperText>
							</FormControl>
						</Grid.Item>
						{versionListIsSuccess && (
							<Grid.Item xs={4}>
								<Box flexDirection="row">
									<Controller
										name="version"
										control={control}
										render={({ field: { onChange, value } }): ReactElement => (
											<FormControl fullWidth>
												<Autocomplete
													disablePortal
													options={
														version_list?.map((version) => version.prefix) || []
													}
													getOptionLabel={(option): string =>
														option?.replace(/S_/g, '')?.replace(/_/g, '.') || ''
													}
													noOptionsText="Nenhuma versão encontrada"
													popupIcon={<CaretDown size={14} />}
													clearIcon={<X size={14} />}
													value={value ?? ''}
													onChange={(_, v): void => onChange(v ?? '')}
													size="small"
													id="extract-version"
													aria-describedby="version-helper-text"
													// isOptionEqualToValue={(option, value): boolean => {
													// 	console.log({ option, value });
													// 	return option !== '' && value === '';
													// }}
													renderInput={(params): ReactElement => (
														<TextField
															{...params}
															label="Versão"
															placeholder="0.0"
															error={!!errors.version}
															InputProps={{
																...params.InputProps,
																endAdornment:
																	addEditIconToAutoCompleteEndAdornment(
																		params.InputProps
																			.endAdornment as ReactElement,
																	),
															}}
														/>
													)}
												/>
												<FormHelperText
													id="version-helper-text"
													variant="standard"
													error={!!errors.version}
													sx={{
														textAlign: 'right',
													}}
												>
													{errors.version?.message ?? ' '}
												</FormHelperText>
											</FormControl>
										)}
									/>
								</Box>
							</Grid.Item>
						)}
					</Grid.Root>

					<Stack
						justifyContent="space-between"
						alignItems="center"
						direction="row"
						sx={{
							padding: '0.5rem 0',
						}}
					>
						<Typography fontWeight="bold">Árvore XML E-Social</Typography>
						<Button
							size="small"
							onClick={(): void =>
								append({
									name: '',
									children: [
										{
											name: '',
											type: 'number',
										},
									],
								})
							}
							startIcon={<Plus size={20} />}
						>
							Adicionar nó
						</Button>
					</Stack>

					<Stack gap={2}>
						{fields.map((field, index) => (
							<Grid.Root
								key={field.id}
								sx={{
									border: '1px solid #b5b4b7',
									borderRadius: '8px',
									padding: '0.5rem',
								}}
							>
								<Grid.Item xs={12}>
									<TextField
										size="small"
										fullWidth
										placeholder="Nó principal"
										defaultValue={field.name}
										error={!!errors?.nodes?.[index]?.name?.message}
										{...register(`nodes.${index}.name` as const)}
									/>
								</Grid.Item>
								{field?.children?.length > 0 &&
									field?.children.map((child, index) => (
										<Fragment key={index}>
											<Grid.Item xs={6}>
												<TextField
													size="small"
													fullWidth
													placeholder="Nó interno"
												/>
											</Grid.Item>
											<Grid.Item xs={6}>
												<TextField
													size="small"
													fullWidth
													placeholder="Tipo filho"
													select
													SelectProps={{
														IconComponent: CaretDown,
													}}
												>
													{children_types.map((child) => (
														<MenuItem
															key={child.type}
															value={child.type}
														>
															{child.type === 'number' ? 'Numérico' : 'Texto'}
														</MenuItem>
													))}
												</TextField>
											</Grid.Item>
										</Fragment>
									))}
							</Grid.Root>
						))}
					</Stack>

					<Stack
						direction="row"
						justifyContent="flex-end"
						padding={1}
						gap={1}
					>
						<Button
							variant="outlined"
							disabled
						>
							Montar a partir de XML (em breve)
						</Button>
						<Button
							variant="contained"
							type="submit"
						>
							Gerar
						</Button>
					</Stack>
				</Stack>
			</Box>
			{modal.key === 'create-version' && <Modal.CreateVersion />}
		</Container>
	);
}
