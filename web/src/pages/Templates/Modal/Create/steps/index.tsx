import { Step, StepLabel, Stepper } from '@mui/material';
import type { ReactElement } from 'react';

interface StepProps {
	step: number;
}
const steps = ['Upload', 'Coleta e Criação', 'Finalizar'];

export const STEPS_COUNT = steps.length;

export function Steps({ step }: StepProps): ReactElement {
	return (
		<Stepper
			nonLinear
			activeStep={step}
		>
			{steps.map((label) => (
				<Step key={label}>
					<StepLabel style={{ boxShadow: '0 0 0 1px transparent' }}>
						{label}
					</StepLabel>
				</Step>
			))}
		</Stepper>
	);
}
