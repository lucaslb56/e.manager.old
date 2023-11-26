import type { ButtonProps } from '@mui/material';
import type { Icon as IconType } from 'phosphor-react';
import type { ReactElement } from 'react';

import { Container } from './styles';

interface IconProps extends ButtonProps {
	component: IconType;
	fillColor?: string;
}

export function Icon({
	component: IconComponent,
	fillColor,
	...rest
}: IconProps): ReactElement {
	return (
		<Container {...rest}>
			<IconComponent
				color={fillColor || '#f4f4f4'}
				size={18}
				cursor="pointer"
				weight="bold"
			/>
		</Container>
	);
}
