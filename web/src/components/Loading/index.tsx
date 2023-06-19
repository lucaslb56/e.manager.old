import type { ReactElement } from 'react';

import { CircularProgress } from '../Mui';

import { ContainerLoading } from './styles';

export function Loading(): ReactElement {
	return (
		<ContainerLoading>
			<CircularProgress style={{ color: '#131C55' }} />
		</ContainerLoading>
	);
}
