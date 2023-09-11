import { Database, Files } from 'phosphor-react';

import type { Menu } from '~/models/Menu';

export const PrivateMenus: Menu[] = [
	{
		label: 'Leiautes',
		path: 'leiautes',
		icon: Files,
	},
	{
		label: 'Extrações',
		path: 'extracts',
		icon: Database,
	},
];
