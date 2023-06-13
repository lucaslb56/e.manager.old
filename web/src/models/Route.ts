import type { Icon as NavIconType } from 'phosphor-react';
import type { FunctionComponent } from 'react';

export type RoutePath =
	| 'signin'
	| 'templates'
	| 'transmissions'
	| 'users'
	| 'logout';

export interface RouteMenu {
	label: string;
	path: RoutePath;
	icon: NavIconType;
	component: FunctionComponent;
}
