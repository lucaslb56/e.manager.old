import type { FunctionComponent } from 'react';

import type { Menu } from './Menu';

export type Route = Pick<Menu, 'path'> & {
	component: FunctionComponent;
};
