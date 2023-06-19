import { Box, IconButton } from '@mui/material';
import { CheckCircle, UploadSimple } from 'phosphor-react';
import { Fragment, type ChangeEvent, type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '~/components/Mui';
import type { CreateTemplate } from '~/schemas/Template';

export function Upload(): ReactElement {
	const {
		formState: { errors },
		setValue,
		setError,
		getValues,
		unregister,
	} = useFormContext<CreateTemplate>();

	function handleUpload(event: ChangeEvent<HTMLInputElement>): void {
		setValue('template', event.target.files![0]);
		setError('template', {});
	}

	const template = getValues('template');

	return (
		<Box
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{!template && (
				<Fragment>
					<IconButton
						color="primary"
						component="label"
					>
						<input
							type="file"
							accept=".xml"
							id="template-upload"
							hidden
							onChange={handleUpload}
						/>
						<UploadSimple
							color={errors.template?.message ? 'red' : '#4256d0'}
							size={50}
						/>
					</IconButton>

					<label
						htmlFor="template-upload"
						style={{
							cursor: 'pointer',
							color: errors.template?.message ? 'red' : '#4256d0',
						}}
					>
						{errors.template?.message ??
							'Clique aqui para fazer upload e gerar seu template'}
					</label>
				</Fragment>
			)}

			{template && (
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<CheckCircle
						color="green"
						size={50}
					/>
					<span
						style={{
							color: errors.template?.message ? 'red' : '#4256d0',
						}}
					>
						{template.name}
					</span>
					<Button
						color="error"
						onClick={(): void => unregister('template')}
					>
						Remover arquivo
					</Button>
				</Box>
			)}
		</Box>
	);
}
