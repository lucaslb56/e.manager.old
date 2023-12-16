/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Box,
	Button,
	CircularProgress,
	FormControl,
	FormHelperText,
	TextField,
} from '@mui/material';
import { AxiosError } from 'axios';
import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Modal } from '~/components';
import { KEYS, queryClient, useModal } from '~/hooks';
import { useCreateVersion } from '~/hooks/query/version/create';
import { VersionPrefixInputMask } from '~/utils/mask-input';

const RegexVersion = new RegExp(/^\d+\.\d+$/);

const Schema = z.object({
	prefix: z.string().regex(RegexVersion, 'Por favor, informe o prefixo.'),
	description: z.string().optional(),
});

type FormType = z.infer<typeof Schema>;

export function CreateVersion(): ReactElement {
	const modal = useModal();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<FormType>({
		mode: 'onSubmit',
		resolver: zodResolver(Schema),
	});

	const { isLoading: isLoadingCreateVersion, mutateAsync: createVersion } =
		useCreateVersion({
			onError(error) {
				if (error instanceof AxiosError) {
					setError('prefix', {
						message: 'Prefixo já existe',
					});
					return;
				}
			},
			onSuccess(data) {
				queryClient.invalidateQueries([KEYS['VERSION-LIST']]);
				modal.close();
			},
		});

	function createVersionHandler(data: FormType): void {
		createVersion(data);
	}

	return (
		<Modal.Root
			open={modal.isOpen && modal.key === 'create-version'}
			onClose={modal.close}
			component="form"
			onSubmit={handleSubmit(createVersionHandler)}
		>
			<Modal.Header
				title="Nova versão"
				onClose={modal.close}
			/>
			<Modal.Body>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '0.5rem',
						paddingY: '1rem',
					}}
				>
					<FormControl>
						<TextField
							placeholder="0.0"
							label="Prefixo"
							size="small"
							fullWidth
							error={!!errors.prefix}
							aria-describedby="prefix-helper-text"
							InputProps={{
								inputComponent: VersionPrefixInputMask,
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

					<TextField
						label="Descrição"
						placeholder="Descrição"
						size="small"
						multiline
						fullWidth
						rows={5}
						error={!!errors.description}
						{...register('description')}
					/>
				</Box>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="contained"
					type="submit"
					endIcon={
						isLoadingCreateVersion && (
							<CircularProgress
								size={20}
								variant="indeterminate"
								sx={{ color: '#f4f4f4' }}
							/>
						)
					}
				>
					Criar
				</Button>
			</Modal.Footer>
		</Modal.Root>
	);
}
