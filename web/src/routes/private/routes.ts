import { Layout, TreeStructure } from 'phosphor-react';

import type { RouteMenu } from '~/models/Route';
import { Extracts } from '~/pages/Extracts';
import { Templates } from '~/pages/Templates';

export const PrivateRoutes: RouteMenu[] = [
	{
		label: 'Transmissões',
		path: 'extracts',
		icon: TreeStructure,
		component: Extracts,
	},
	{
		label: 'Templates',
		path: 'templates',
		icon: Layout,
		component: Templates,
	},
	// {
	// 	label: 'Usuários',
	// 	path: 'users',
	// 	icon: UsersThree,
	// 	component: Users,
	// },
];
