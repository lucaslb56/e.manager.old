import { Typography } from '@mui/material';
import type { Icon } from 'phosphor-react';
import { SignOut } from 'phosphor-react';
import type { ReactElement } from 'react';
import { toast } from 'react-toastify';

import { PrivateMenus } from './menus';
import { SidebarButton } from './SidebarButton';
import { Container, Header, Navbar } from './styles';

import * as Logo from '~/components/Logo';
import { useAuth } from '~/hooks/store';

export function Sidebar(): ReactElement {
	const { logout } = useAuth();

	function handleLogout(): void {
		logout();
		toast.success('Logout efetuado com sucesso!');
	}

	return (
		<Container>
			<Header
				direction="row"
				gap={2}
			>
				<Logo.Small />
				<Typography
					variant="h5"
					fontWeight="bold"
				>
					eManager
				</Typography>
			</Header>

			<Navbar>
				{PrivateMenus.map((menu) => (
					<SidebarButton
						label={menu.label}
						key={menu.label}
						path={menu.path}
						Icon={menu.icon as Icon}
					/>
				))}

				<SidebarButton
					label="Sair"
					Icon={SignOut}
					onClick={handleLogout}
				/>
			</Navbar>
		</Container>
	);
}
