import { SignOut } from 'phosphor-react';

import type { RouteMenu } from '~/models/Route';
import { Signin } from '~/pages/Auth/Signin';

export const PublicRoutes: RouteMenu[] = [
	{
		label: 'Signin',
		path: 'signin',
		icon: SignOut,
		component: Signin,
	},
];
