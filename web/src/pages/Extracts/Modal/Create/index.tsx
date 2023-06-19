import { zodResolver } from '@hookform/resolvers/zod';
import { useState, type ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { STEPS_COUNT, Steps } from './steps';
import { Finished } from './steps/Finished';
import { Generator } from './steps/generator';
import { Upload } from './steps/upload';

import { Box, Button } from '~/components/Mui';
import { queryClient } from '~/hooks/query';
import { useExtractBuilder } from '~/hooks/query/extracts/builder';
import { KEYS } from '~/hooks/query/keys';
import type { ExtractTemplate } from '~/schemas/Extract';
import { StepOneSchema, StepTwoSchema } from '~/schemas/Extract';

const StepView = {
	0: <Upload />,
	1: <Generator />,
	2: <Finished />,
} as const;

const StepValidator = {
	0: zodResolver(StepOneSchema),
	1: zodResolver(StepTwoSchema),
} as const;

interface CreateProps {
	close: () => void;
}

export function Create({ close }: CreateProps): ReactElement {
	const [step, setStep] = useState(0);

	function success(): void {
		queryClient.invalidateQueries([KEYS.EXTRACTS]);
		close();
		toast.success('Dados armazenados com sucesso!');
	}

	const { mutateAsync: buildExtract } = useExtractBuilder({ success });

	const CreateTemplateForm = useForm<ExtractTemplate>({
		mode: 'all',
		resolver: StepValidator[step as keyof typeof StepValidator],
	});

	function prevStep(): void {
		setStep((state) => (step > 0 ? state - 1 : state));
	}

	function nextStep(data: ExtractTemplate): void {
		if (step === STEPS_COUNT - 1) {
			buildExtract(data.extracts);
		}

		setStep((state) => (step < STEPS_COUNT - 1 ? state + 1 : state));
	}

	return (
		<Box padding="1rem">
			<FormProvider {...CreateTemplateForm}>
				<form onSubmit={CreateTemplateForm.handleSubmit(nextStep)}>
					<Steps step={step} />

					<Box padding="1.5rem 0">
						{StepView[step as keyof typeof StepView]}
					</Box>

					<Box
						display="flex"
						justifyContent="space-between"
					>
						<Button
							variant="contained"
							size="small"
							disabled={step === 0}
							onClick={prevStep}
						>
							Anterior
						</Button>
						<Button
							type={step === STEPS_COUNT - 1 ? 'submit' : 'button'}
							variant="contained"
							size="small"
							onClick={CreateTemplateForm.handleSubmit(nextStep)}
						>
							{step === STEPS_COUNT - 1 && 'Finalizar'}
							{!(step === STEPS_COUNT - 1) && 'Próximo'}
						</Button>
					</Box>
				</form>
			</FormProvider>
		</Box>
	);
}
