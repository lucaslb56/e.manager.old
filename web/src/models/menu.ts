import type { Icon } from 'phosphor-react';

export type MenuPath =
	| 'signin'
	| 'leiautes'
	| 'leiautes/detail'
	| 'extracts'
	| 'extracts/detail'
	| 'extracts/data'
	| 'logout';

export interface Menu {
	label: string;
	path: MenuPath;
	icon?: Icon;
}
