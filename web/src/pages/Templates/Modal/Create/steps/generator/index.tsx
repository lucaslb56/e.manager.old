import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Grid,
	MenuItem,
	TextField,
	Typography,
} from '@mui/material';
import { CaretDown } from 'phosphor-react';
import { Fragment, useEffect, type ReactElement } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

import { Loading } from '~/components/Loading';
import { useTemplateGenerator } from '~/hooks/query/template/generator';
import type { CreateTemplate } from '~/schemas/Template';

export function Generator(): ReactElement {
	const {
		getValues,
		control,
		register,
		setValue,
		formState: { errors },
	} = useFormContext<CreateTemplate>();

	const template = getValues('template');

	const { fields } = useFieldArray({
		name: 'entities',
		control,
	});

	const {
		isSuccess,
		isLoading,
		data,
		mutateAsync: templateGenerator,
	} = useTemplateGenerator();

	function generateTemplate(): void {
		const form = new FormData();

		form.append('template', template);

		templateGenerator(form);

		setValue('prefix', template.name.split('_')[0]);
	}

	useEffect(() => {
		if (data && isSuccess) setValue('entities', data);
	}, [data, isSuccess, register, setValue]);

	return (
		<Box
			style={{
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				gap: '1.5rem',
			}}
		>
			{isLoading && <Loading />}

			{isSuccess && data && (
				<Fragment>
					<Typography style={{ fontWeight: 'bold' }}>Template</Typography>

					<Grid
						container
						spacing={2}
					>
						<Grid
							item
							xs={4}
						>
							<TextField
								fullWidth
								placeholder="Prefixo"
								label="Prefixo"
								value={template.name.split('_')[0]}
								size="small"
								disabled
								error={!!errors?.prefix?.message}
							/>
						</Grid>
						<Grid
							item
							xs={4}
						>
							<Controller
								name="name"
								control={control}
								defaultValue={template.name.split('_')[0]}
								render={({ field }): ReactElement => (
									<TextField
										{...field}
										fullWidth
										placeholder="Nome"
										label="Nome"
										size="small"
										error={!!errors?.name?.message}
									/>
								)}
							/>
						</Grid>

						<Grid
							item
							xs={4}
						>
							<Controller
								name="version"
								control={control}
								defaultValue="1.0.0"
								render={({ field }): ReactElement => (
									<TextField
										{...field}
										fullWidth
										placeholder="Versão"
										label="Versão"
										size="small"
										error={!!errors?.version?.message}
									/>
								)}
							/>
						</Grid>
					</Grid>

					<Typography style={{ fontWeight: 'bold' }}>Entidades</Typography>
					<Grid
						container
						spacing={2}
						style={{
							overflowY: 'auto',
							maxHeight: '20rem',
						}}
					>
						{fields.map((item, index) => (
							<Grid
								item
								key={item.id}
								xs={12}
							>
								<Accordion>
									<AccordionSummary
										expandIcon={<CaretDown />}
										style={{ background: '#c1ceff' }}
									>
										<Typography style={{ fontWeight: 'bold' }}>{`${
											template.name.split('_')[0]
										}_${item?.prefix?.toUpperCase()}`}</Typography>
									</AccordionSummary>
									<AccordionDetails
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '1rem',
										}}
									>
										<Grid
											container
											spacing={2}
										>
											<Grid
												item
												xs={3}
											>
												<TextField
													fullWidth
													placeholder="Prefixo"
													label="Prefixo"
													defaultValue={item.prefix}
													size="small"
													disabled
												/>
											</Grid>

											<Grid
												item
												xs={3}
											>
												<Controller
													name={`entities.${index}.name`}
													control={control}
													defaultValue={item.name}
													render={({ field }): ReactElement => (
														<TextField
															{...field}
															fullWidth
															placeholder="Nome"
															label="Nome"
															size="small"
															error={!!errors?.entities?.[index]?.name?.message}
														/>
													)}
												/>
											</Grid>

											<Grid
												item
												xs={3}
											>
												<TextField
													fullWidth
													placeholder="Tipo"
													label="Tipo"
													defaultValue={item.type}
													size="small"
													disabled
												/>
											</Grid>

											<Grid
												item
												xs={3}
											>
												<TextField
													fullWidth
													select
													placeholder="Status"
													label="Tipo"
													defaultValue={item.active ? 'active' : 'inactive'}
													size="small"
												>
													<MenuItem value="active">Ativo</MenuItem>
													<MenuItem value="inactive">Inativo</MenuItem>
												</TextField>
											</Grid>
										</Grid>

										<Typography style={{ fontWeight: 'bold' }}>
											Colunas
										</Typography>

										{item?.collumns?.map((col, colindex) => (
											<Grid
												container
												spacing={2}
												key={col.prefix}
											>
												<Grid
													item
													xs={3}
												>
													<TextField
														fullWidth
														placeholder="Prefixo"
														label="Prefixo"
														defaultValue={col.prefix}
														size="small"
														disabled
													/>
												</Grid>

												<Grid
													item
													xs={3}
												>
													<Controller
														name={`entities.${index}.collumns.${colindex}.name`}
														control={control}
														defaultValue={col.name}
														render={({ field }): ReactElement => (
															<TextField
																{...field}
																fullWidth
																placeholder="Nome"
																label="Nome"
																size="small"
																error={
																	!!errors?.entities?.[index]?.collumns?.[
																		colindex
																	]?.name?.message
																}
															/>
														)}
													/>
												</Grid>

												<Grid
													item
													xs={3}
												>
													<TextField
														fullWidth
														placeholder="Tipo"
														label="Tipo"
														defaultValue={col.type}
														size="small"
														disabled
													/>
												</Grid>

												<Grid
													item
													xs={3}
												>
													<TextField
														fullWidth
														select
														placeholder="Status"
														label="Tipo"
														defaultValue={col.active ? 'active' : 'inactive'}
														size="small"
													>
														<MenuItem value="active">Ativo</MenuItem>
														<MenuItem value="inactive">Inativo</MenuItem>
													</TextField>
												</Grid>
											</Grid>
										))}
									</AccordionDetails>
								</Accordion>
							</Grid>
						))}
					</Grid>
				</Fragment>
			)}

			{!isSuccess && !data && !isLoading && (
				<Box
					style={{
						margin: '0 auto',
					}}
				>
					<Button
						variant="contained"
						onClick={generateTemplate}
					>
						Iniciar Extração
					</Button>
				</Box>
			)}
		</Box>
	);
}
