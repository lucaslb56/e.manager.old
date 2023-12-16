/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Autocomplete,
	Box,
	Button,
	Container,
	FormControl,
	FormHelperText,
	IconButton,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import {
	CaretDown,
	CaretLeft,
	PencilSimpleLine,
	Plus,
	X,
} from '@phosphor-icons/react';
import { Children, cloneElement, type ReactElement } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Modal } from '../modal';

import { Grid } from '~/components';
import { useModal, useVersionList } from '~/hooks';
import { LeiautePrefixInputMask } from '~/utils/mask-input';

const TaSchema = z.object({
	name: z.string().min(1, { message: 'Informe item.' }),
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
	tags: z.array(TaSchema),
});

type LeiauteType = z.infer<typeof LeiauteSchema>;

export function Create(): ReactElement {
	const navigate = useNavigate();
	const modal = useModal();

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
			tags: [
				{
					name: 'Tag/Column 1',
				},
				{
					name: 'Tag/Column 2',
				},
			],
		},
	});

	const { fields, append } = useFieldArray({ control, name: 'tags' });

	function handleCreate(data: LeiauteType): void {
		console.log(data);
	}

	const { data: version_list, isSuccess: versionListIsSuccess } =
		useVersionList();

	function addEditIconToEndAdornment(endAdornment: ReactElement): ReactElement {
		const items = Children.toArray(endAdornment?.props?.children);

		items.push(
			<IconButton
				size="medium"
				onClick={(): void => modal.open({ key: 'create-version' })}
				key="edit-icon"
				sx={{
					padding: '2px',
				}}
			>
				<PencilSimpleLine size={14} />
			</IconButton>,
		);

		const [clear, popup, edit] = items;

		return cloneElement(endAdornment as ReactElement, {}, [clear, edit, popup]);
	}

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
			<Box>
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
					<Typography variant="h4">Novo Leiaute</Typography>
				</Stack>

				<Stack
					component="form"
					onSubmit={handleSubmit(handleCreate)}
					padding={2}
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
																endAdornment: addEditIconToEndAdornment(
																	params.InputProps.endAdornment,
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
						paddingLeft={1}
						paddingRight={1}
						justifyContent="space-between"
						alignItems="center"
						direction="row"
					>
						<Typography fontWeight="bold">Colunas/Tags</Typography>
						<Button
							variant="outlined"
							size="small"
							onClick={(): void => append({ name: '' })}
						>
							<Plus size={20} />
						</Button>
					</Stack>
					<Grid.Root>
						{fields.map((field, index) => (
							<Grid.Item
								xs={12}
								key={field.id}
							>
								<TextField
									size="small"
									fullWidth
									placeholder="Tag/Coluna"
									defaultValue={field.name}
									error={!!errors?.tags?.[index]?.name?.message}
									{...register(`tags.${index}.name` as const)}
								/>
							</Grid.Item>
						))}
					</Grid.Root>

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
