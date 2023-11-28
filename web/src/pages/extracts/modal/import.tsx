/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, MenuItem, TextField } from '@mui/material';
import { CaretDown, Download, Upload } from '@phosphor-icons/react';
import type { AxiosError } from 'axios';
import { Fragment, useRef, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { Loading, Modal } from '~/components';
import { useExtractLeiaute, useLeiauteActiveList, useModal } from '~/hooks';
import type { ExtractData } from '~/models';
import {
	LeiautePrefixEnum,
	LeiauteVersionEnum,
	LeiauteVersionList,
} from '~/models';

const Schema = z.object({
	prefix: z.nativeEnum(LeiautePrefixEnum, {
		errorMap: () => ({ message: 'Selecione prefixo' }),
	}),
	version: z.nativeEnum(LeiauteVersionEnum, {
		errorMap: () => ({ message: 'Selecione versão' }),
	}),
	leiautes: z.instanceof(FormData, {
		message: 'Adicione arquivos XML',
	}),
});

type FormType = z.infer<typeof Schema>;

export function Import(): ReactElement {
	const modal = useModal();

	const {
		data: leiaute_active_list,
		isSuccess,
		isLoading,
	} = useLeiauteActiveList();

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
	} = useForm<FormType>({
		mode: 'all',
		resolver: zodResolver(Schema),
	});

	const prefix = watch('prefix');
	const version = watch('version');
	const leiautes = watch('leiautes');

	const isValidPrefixAndVersion =
		!!version?.length && !!prefix?.length && !!leiautes;

	const navigate = useNavigate();

	const inputFile = useRef<HTMLInputElement | null>(null);

	function onError(error: AxiosError | Error): void {
		modal.close();
		toast.error('Houver algum erro ao tentar importar dados.');
	}

	function onSuccess({ extracts }: ExtractData): void {
		modal.close();
		navigate('/extracts/data', { state: { extracts, version, prefix } });
		toast.success('Dados importados com sucesso.');
	}

	const { mutateAsync: generate_extract, isLoading: is_loading_extract } =
		useExtractLeiaute({
			onError,
			onSuccess,
		});

	function handleExtract(data: FormType): void {
		generate_extract(data);
	}

	return (
		<Modal.Root
			open={modal.isOpen && modal.key === 'extract-import'}
			onClose={modal.close}
		>
			<Modal.Header
				title="Extrair dados"
				onClose={modal.close}
			/>
			<Modal.Body>
				<Box
					component="form"
					display="flex"
					flexDirection="column"
					gap={2}
					sx={{ padding: '1rem 0' }}
					onSubmit={handleSubmit(handleExtract)}
				>
					{isLoading && <Loading />}

					{is_loading_extract && <Loading />}

					{!is_loading_extract &&
						!isLoading &&
						isSuccess &&
						leiaute_active_list.length > 0 && (
							<Fragment>
								<TextField
									label="Prefixo"
									select
									fullWidth
									size="small"
									defaultValue={''}
									SelectProps={{
										IconComponent: CaretDown,
									}}
									error={!!errors.prefix?.message}
									{...register('prefix')}
								>
									<MenuItem
										value=""
										disabled
									>
										Selecione prefixo
									</MenuItem>
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
									defaultValue={''}
									size="small"
									select
									SelectProps={{
										IconComponent: CaretDown,
									}}
									error={!!errors.version?.message}
									{...register('version')}
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
								</TextField>
							</Fragment>
						)}
				</Box>
			</Modal.Body>
			<Modal.Footer>
				{!is_loading_extract && !isLoading && !isValidPrefixAndVersion && (
					<Button
						endIcon={
							<Upload
								size={20}
								weight="bold"
							/>
						}
						type="button"
						variant="contained"
						color="error"
						onClick={(): void => inputFile.current?.click()}
					>
						Importar
					</Button>
				)}

				<input
					ref={inputFile}
					type="file"
					accept="text/xml"
					multiple
					onChange={(event): void => {
						const form = new FormData();
						const files = [...(event.target.files as FileList)].filter(
							(item) =>
								item.name.includes(prefix) ||
								item.name.includes(prefix?.replace('S', 'S-')) ||
								item.name.includes(prefix?.replace('S', 'S_')),
						);

						for (const file of files) form.append('leiautes[]', file);

						setValue('leiautes', form);
					}}
					style={{ display: 'none' }}
				/>

				{!is_loading_extract && !isLoading && isValidPrefixAndVersion && (
					<Button
						endIcon={
							<Download
								size={20}
								weight="bold"
							/>
						}
						type="submit"
						variant="contained"
					>
						Iniciar
					</Button>
				)}
			</Modal.Footer>
		</Modal.Root>
	);
}
