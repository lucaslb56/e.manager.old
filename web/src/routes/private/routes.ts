import type { Route } from '~/models';
import * as Page from '~/pages';

export const PrivateRoutes: Route[] = [
	{
		path: 'leiautes',
		component: Page.Leiautes,
	},
	{
		path: 'extracts',
		component: Page.Extracts,
	},
	{
		path: 'leiautes/detail',
		component: Page.LeiauteDetail,
	},
	{
		path: 'extracts/detail',
		component: Page.ExtractDetail,
	},
	{
		path: 'extracts/data',
		component: Page.ExtractData,
	},
];
