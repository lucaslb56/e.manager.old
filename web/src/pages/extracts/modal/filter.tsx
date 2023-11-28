/* eslint-disable no-unused-vars */
import { Box, Button, MenuItem, TextField } from '@mui/material';
import { CaretDown } from '@phosphor-icons/react';
import { Fragment, type ReactElement } from 'react';

import { Loading, Modal } from '~/components';
import { useLeiauteActiveList, useModal, useParams } from '~/hooks';
import type { LeiauteQuery } from '~/models';
import { LeiauteVersionList } from '~/models';

export function Filter(): ReactElement {
	const modal = useModal();

	const {
		data: leiaute_active_list,
		isSuccess,
		isLoading,
	} = useLeiauteActiveList();

	const { params, handleParams: append } = useParams<LeiauteQuery>({
		limit: 15,
		prefix: 'S1000',
		version: 'S_1_0',
	});

	return (
		<Modal.Root
			open={modal.isOpen && modal.key === 'extract-filter'}
			onClose={modal.close}
		>
			<Modal.Header
				title="Filtros"
				onClose={modal.close}
			/>
			<Modal.Body>
				<Box
					// component="form"
					display="flex"
					flexDirection="column"
					gap={2}
					sx={{ padding: '1rem 0' }}
				>
					{isLoading && <Loading />}

					{!isLoading && isSuccess && leiaute_active_list.length > 0 && (
						<Fragment>
							<TextField
								label="Prefixo"
								select
								fullWidth
								size="small"
								defaultValue={params.prefix}
								SelectProps={{
									IconComponent: CaretDown,
								}}
							>
								{/* <MenuItem
									value=""
									disabled
								>
									Selecione prefixo
								</MenuItem> */}
								{leiaute_active_list.map((item) => (
									<MenuItem
										key={item.id}
										value={item.prefix}
									>
										{item.prefix}
									</MenuItem>
								))}
							</TextField>

							<TextField
								fullWidth
								label="Versão"
								defaultValue={params.version}
								size="small"
								select
								SelectProps={{
									IconComponent: CaretDown,
								}}
							>
								{/* <MenuItem
									value=""
									disabled
								>
									Selecione versão
								</MenuItem> */}

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
						</Fragment>
					)}
				</Box>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="contained"
					onClick={(): void => {
						append('prefix', params.prefix);
						append('version', params.version);
						modal.close();
					}}
				>
					Aplicar
				</Button>
			</Modal.Footer>
		</Modal.Root>
	);
}
