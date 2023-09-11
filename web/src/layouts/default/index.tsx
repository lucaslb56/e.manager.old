import type { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './styles';

import { Sidebar } from '~/components/Sidebar';

export function DefaultLayout(): ReactElement {
	return (
		<Container>
			<Sidebar />
			<Outlet />
		</Container>
	);
}
