/* eslint-disable no-unused-vars */
import type { InputBaseComponentProps } from '@mui/material';
import type { RefCallback } from 'react';
import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

interface InputProps {
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
}

export const PrefixInputMask = forwardRef<
	HTMLInputElement,
	Omit<InputBaseComponentProps, 'onChange'> & InputProps
>(({ ...props }, ref) => {
	const { onChange, ...rest } = props;
	return (
		<IMaskInput
			{...rest}
			mask="0.0"
			inputRef={ref as RefCallback<HTMLTextAreaElement | HTMLInputElement>}
			onAccept={(value): void =>
				onChange({ target: { name: props.name, value: value as string } })
			}
			overwrite
		/>
	);
});

PrefixInputMask.displayName = 'PrefixInputMask';
