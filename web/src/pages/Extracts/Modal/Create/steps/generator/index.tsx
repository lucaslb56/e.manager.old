import { Box, Button, Typography } from '@mui/material';
import { CheckCircle } from 'phosphor-react';
import { useEffect, type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

import { Loading } from '~/components/Loading';
import { useExtractGenerator } from '~/hooks/query/extracts/generator';
import type { ExtractTemplate } from '~/schemas/Extract';

export function Generator(): ReactElement {
	const { getValues, register, setValue } = useFormContext<ExtractTemplate>();

	const templates = getValues('templates');

	const {
		isSuccess,
		isLoading,
		data,
		mutateAsync: extractGenerator,
	} = useExtractGenerator();

	function generateTemplate(): void {
		const form = new FormData();

		for (const template of templates) form.append('templates', template);

		extractGenerator(form);
	}

	useEffect(() => {
		if (data && isSuccess) setValue('extracts', data);
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
				<Box
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						gap: '1.5rem',
					}}
				>
					<CheckCircle
						color="green"
						size={50}
					/>
					<Typography style={{ fontWeight: 'bold', textAlign: 'center' }}>
						Dados Extraídos
					</Typography>
				</Box>
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
