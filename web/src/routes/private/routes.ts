import { Layout, TreeStructure, UsersThree } from 'phosphor-react';

import type { RouteMenu } from '~/models/Route';
import { Templates } from '~/pages/Templates';
import { Transmissions } from '~/pages/Transmissions';
import { Users } from '~/pages/Users';

export const PrivateRoutes: RouteMenu[] = [
	{
		label: 'Transmissões',
		path: 'transmissions',
		icon: TreeStructure,
		component: Transmissions,
	},
	{
		label: 'Templates',
		path: 'templates',
		icon: Layout,
		component: Templates,
	},
	{
		label: 'Usuários',
		path: 'users',
		icon: UsersThree,
		component: Users,
	},
];
