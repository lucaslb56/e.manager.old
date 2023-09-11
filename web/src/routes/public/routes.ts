import type { Route } from '~/models/Route';
import { Signin } from '~/pages';

export const PublicRoutes: Route[] = [
	{
		path: 'signin',
		component: Signin,
	},
];
