import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { CaretDown } from 'phosphor-react';
import { type ReactElement } from 'react';

import { useTemplateView } from '~/hooks/query/template/view';
import type { Template } from '~/models/Template';

interface ViewProps {
	template: Partial<Template>;
}

export function View({ template }: ViewProps): ReactElement {
	const { data: view, isSuccess, isLoading } = useTemplateView(template);

	return (
		<Box
			style={{
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				gap: '1.5rem',
			}}
		>
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
						value={template.prefix}
						size="small"
						disabled
					/>
				</Grid>
				<Grid
					item
					xs={4}
				>
					<TextField
						fullWidth
						defaultValue={template.name}
						placeholder="Nome"
						label="Nome"
						size="small"
						disabled
					/>
				</Grid>

				<Grid
					item
					xs={4}
				>
					<TextField
						fullWidth
						placeholder="Versão"
						label="Versão"
						size="small"
						defaultValue={template.version}
						disabled
					/>
				</Grid>
			</Grid>

			<Typography style={{ fontWeight: 'bold' }}>Entidades</Typography>

			{isLoading && (
				<Typography style={{ fontWeight: 'bold', textAlign: 'center' }}>
					Aguarde um pouco...
				</Typography>
			)}

			{isSuccess && view && (
				<Grid
					container
					spacing={2}
					style={{
						overflowY: 'auto',
						maxHeight: '20rem',
					}}
				>
					{view?.entities?.map((item) => (
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
										view.name
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
											<TextField
												fullWidth
												placeholder="Nome"
												label="Nome"
												defaultValue={item.name}
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
												placeholder="Status"
												label="Status"
												defaultValue={item.active ? 'Ativo' : 'Inativo'}
												size="small"
												disabled
											/>
										</Grid>
									</Grid>

									<Typography style={{ fontWeight: 'bold' }}>
										Colunas
									</Typography>

									{item?.collumns?.map((col) => (
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
												<TextField
													fullWidth
													placeholder="Nome"
													label="Nome"
													defaultValue={col.name}
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
													placeholder="Status"
													label="Status"
													defaultValue={col.active ? 'Ativo' : 'Inativo'}
													size="small"
													disabled
												/>
											</Grid>
										</Grid>
									))}
								</AccordionDetails>
							</Accordion>
						</Grid>
					))}
				</Grid>
			)}
		</Box>
	);
}
