import type { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutContainer, Main } from './styles';

import { Sidebar } from '~/components/Sidebar';

export function DefaultLayout(): ReactElement {
	return (
		<LayoutContainer>
			<Sidebar />
			<Main>
				<Outlet />
			</Main>
		</LayoutContainer>
	);
}
