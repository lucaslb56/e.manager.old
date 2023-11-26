import type { ModalProps } from '@mui/material';
import { Modal as ModalMui, Stack, Typography } from '@mui/material';
import { X } from 'phosphor-react';
import type { MouseEvent, ReactElement } from 'react';

import { Container } from './styles';

interface Props extends ModalProps {
	title?: string;
}

export function Modal({ children, title, ...rest }: Props): ReactElement {
	function handleClose(event: MouseEvent<SVGSVGElement>): void {
		rest.onClose && rest.onClose(event, 'backdropClick');
	}

	return (
		<ModalMui {...rest}>
			<Container>
				{title && (
					<Stack
						display="flex"
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography variant="h5">{title}</Typography>
						<X
							color="#5C73DB"
							weight="bold"
							size={20}
							cursor="pointer"
							onClick={handleClose}
						/>
					</Stack>
				)}
				{children}
			</Container>
		</ModalMui>
	);
}
