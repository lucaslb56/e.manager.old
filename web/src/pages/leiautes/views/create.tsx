/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Box,
	Button,
	Container,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { CaretLeft, Plus } from '@phosphor-icons/react';
import type { ReactElement } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Grid } from '~/components';

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

	const {
		register,
		control,
		formState: { errors },
		handleSubmit,
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
						<Grid.Item xs={4}>
							<TextField
								size="small"
								fullWidth
								placeholder="Versão"
								error={!!errors.version}
								{...register('version')}
							/>
						</Grid.Item>
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
		</Container>
	);
}
