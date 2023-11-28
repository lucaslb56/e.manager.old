/* eslint-disable no-unused-vars */
import { Box, Container, Stack, Typography } from '@mui/material';
import { CaretLeft } from '@phosphor-icons/react';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Leiaute } from '~/models';

interface UseLocation {
	state: {
		leiaute: Leiaute;
	};
}

export enum LeiauteKeyMap {
	name = 'Nome',
	version = 'Versão em vigor',
	prefix = 'Prefixo E-social',
}

export function Create(): ReactElement {
	const navigate = useNavigate();
	return (
		<Container
			maxWidth="xl"
			style={{
				paddingTop: '5rem',
				paddingBottom: '2rem',
				height: '100vh',
				overflowY: 'auto',
			}}
		>
			<Box
				display="flex"
				flex="1"
				justifyContent="space-between"
				alignItems="center"
			>
				<Stack
					direction="row"
					alignItems="center"
					gap={2}
					style={{
						cursor: 'pointer',
					}}
					component="div"
					onClick={(): void => navigate(-1)}
				>
					<CaretLeft
						size={36}
						weight="bold"
					/>
					<Typography variant="h4">Novo Leiaute</Typography>
				</Stack>
			</Box>
		</Container>
	);
}
