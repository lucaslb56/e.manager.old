/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Autocomplete,
	Box,
	Button,
	Container,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { CaretDown, CaretLeft, Plus, X } from '@phosphor-icons/react';
import type { ReactElement, ReactNode } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Modal } from '../modal';

import { Grid } from '~/components';
import { useModal, useVersionList } from '~/hooks';
import { LeiauteVersionEnum } from '~/models';

const TaSchema = z.object({
	name: z.string().min(1, { message: 'Informe item.' }),
});

const LeiauteSchema = z.object({
	name: z.string().min(1, { message: 'Informe nome do leiaute.' }),
	prefix: z.string().min(1, { message: 'Informe prefixo do leiaute.' }),
	version: z.string().min(1, { message: 'Informe versão do leiaute.' }),
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
		setValue,
	} = useForm<LeiauteType>({
		mode: 'onSubmit',
		resolver: zodResolver(LeiauteSchema),
		defaultValues: {
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
							<TextField
								size="small"
								fullWidth
								placeholder="Prefixo"
								error={!!errors.prefix}
								{...register('prefix')}
							/>
						</Grid.Item>
						{versionListIsSuccess && (
							<Grid.Item xs={4}>
								<Autocomplete
									disablePortal
									options={version_list?.map((version) => version.prefix) || []}
									getOptionLabel={(option): string =>
										option?.replace(/S_/g, '')?.replace(/_/g, '.') || ''
									}
									noOptionsText="Nenhuma versão encontrada"
									popupIcon={<CaretDown size={14} />}
									clearIcon={<X size={14} />}
									onChange={(_, value): void => {
										setValue(
											'version',
											LeiauteVersionEnum[
												value as keyof typeof LeiauteVersionEnum
											],
										);
									}}
									renderInput={(p): ReactNode => (
										<TextField
											{...p}
											fullWidth
											id="extract-version"
											label="Versão"
											size="small"
										/>
									)}
								/>
								<Typography
									component="a"
									align="right"
									variant="body2"
									sx={{
										cursor: 'pointer',
										display: 'flex',
										justifyContent: 'flex-end',
										paddingY: '0.25rem',
										textDecoration: 'underline',
									}}
									onClick={(): void => modal.open({ key: 'create-version' })}
								>
									Nova versão
								</Typography>
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
					>
						<Button
							variant="contained"
							type="submit"
						>
							Criar
						</Button>
					</Stack>
				</Stack>
			</Box>
			{modal.key === 'create-version' && <Modal.CreateVersion />}
		</Container>
	);
}
