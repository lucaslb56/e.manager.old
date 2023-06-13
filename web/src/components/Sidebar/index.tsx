import { SignOut as ExitIcon } from 'phosphor-react';
import type { ReactElement } from 'react';

import { SidebarButton } from './SidebarButton';
import { Navbar, SidebarContainer, SidebarHeader } from './styles';

import { useAuth } from '~/hooks/Auth';
import { PrivateRoutes } from '~/routes/private/routes';

export function Sidebar(): ReactElement {
	const { signOut } = useAuth();

	return (
		<SidebarContainer>
			<SidebarHeader>
				<h1>eManager</h1>
			</SidebarHeader>

			<Navbar>
				{PrivateRoutes.map((menu) => (
					<SidebarButton
						label={menu.label}
						key={menu.label}
						Icon={menu.icon}
						path={menu.path}
					/>
				))}

				<SidebarButton
					label="Sair"
					Icon={ExitIcon}
					onClick={signOut}
				/>
			</Navbar>
		</SidebarContainer>
	);
}
