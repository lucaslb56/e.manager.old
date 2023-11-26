/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import type { ModalProps } from '@mui/material';
import { Box, MenuItem } from '@mui/material';
import type { AxiosError } from 'axios';
import { CaretDown, Download, Upload } from 'phosphor-react';
import { Fragment, useRef, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { Loading, Mui } from '~/components';
import { useExtractLeiaute, useLeiauteActiveList } from '~/hooks';
import type { ExtractData } from '~/models';
import {
	LeiautePrefixEnum,
	LeiauteVersionEnum,
	LeiauteVersionList,
} from '~/models';

interface Props extends Omit<ModalProps, 'children'> {}

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

export function Modal({ open, onClose, ...rest }: Props): ReactElement {
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
		onClose!({}, 'backdropClick');
		toast.error('Houver algum erro ao tentar importar dados.');
	}

	function onSuccess({ extracts }: ExtractData): void {
		onClose!({}, 'backdropClick');
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
		<Mui.Modal
			open={open}
			onClose={onClose}
			title="Importação de dados"
			{...rest}
		>
			<Box
				component="form"
				display="flex"
				flexDirection="column"
				gap={2}
				padding={2}
				onSubmit={handleSubmit(handleExtract)}
			>
				{isLoading && <Loading />}

				{is_loading_extract && <Loading />}

				{!is_loading_extract &&
					!isLoading &&
					isSuccess &&
					leiaute_active_list.length > 0 && (
						<Fragment>
							<Mui.TextField
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
							</Mui.TextField>

							<Mui.TextField
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
							</Mui.TextField>
						</Fragment>
					)}

				{!is_loading_extract && !isLoading && !isValidPrefixAndVersion && (
					<Mui.Button
						fullWidth
						style={{ paddingLeft: '50px', paddingRight: '50px' }}
						endIcon={
							<Upload
								size={20}
								weight="bold"
							/>
						}
						type="button"
						MuiBackground="#991B1B"
						onClick={(): void => inputFile.current?.click()}
					>
						Importar arquivos
					</Mui.Button>
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
					<Mui.Button
						fullWidth
						style={{ paddingLeft: '50px', paddingRight: '50px' }}
						endIcon={
							<Download
								size={20}
								weight="bold"
							/>
						}
						type="submit"
					>
						Iniciar extração
					</Mui.Button>
				)}
			</Box>
		</Mui.Modal>
	);
}
