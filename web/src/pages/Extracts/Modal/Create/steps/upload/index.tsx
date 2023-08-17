import { Box, Button, IconButton } from '@mui/material';
import { CheckCircle, UploadSimple } from 'phosphor-react';
import { Fragment, type ChangeEvent, type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

import { useTemplateList } from '~/hooks/query/template/list';
import type { ExtractTemplate } from '~/schemas/Extract';
import { getTemplatePrefixName } from '~/utils/get-template-prefix-name';

export function Upload(): ReactElement {
	const {
		formState: { errors },
		setValue,
		setError,
		getValues,
		unregister,
	} = useFormContext<ExtractTemplate>();

	const { data } = useTemplateList();
	const templateList = data?.data?.flatMap((item) => item.prefix);
	console.log(templateList);

	function handleUpload(event: ChangeEvent<HTMLInputElement>): void {
		console.log(event.target.files);
		const templates = Array.from(event.target.files as FileList).filter(
			(file) =>
				templateList?.some((template) =>
					getTemplatePrefixName(file.name).includes(template),
				),
		);

		setValue('templates', templates);
		setError('templates', {});
	}

	const templates = getValues('templates');

	console.log(templates);

	return (
		<Box
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{!templates && (
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
							multiple
						/>
						<UploadSimple
							color={errors.templates?.message ? 'red' : '#4256d0'}
							size={50}
						/>
					</IconButton>

					<label
						htmlFor="template-upload"
						style={{
							cursor: 'pointer',
							color: errors.templates?.message ? 'red' : '#4256d0',
						}}
					>
						{errors.templates?.message ??
							'Clique aqui para fazer upload de seu arquivo'}
					</label>
				</Fragment>
			)}

			{templates && (
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
							color: errors.templates?.message ? 'red' : '#4256d0',
						}}
					>
						{/* {templates.name} */}
					</span>
					<Button
						color="error"
						onClick={(): void => unregister('templates')}
					>
						Desfazer
					</Button>
				</Box>
			)}
		</Box>
	);
}
