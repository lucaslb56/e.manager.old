import type { ReactElement } from 'react';
import { Fragment } from 'react';

import { Private } from './private';
import { Public } from './public';

import { useAuth } from '~/hooks/Auth';

export function Router(): ReactElement {
	const { isLogged } = useAuth();

	return (
		<Fragment>
			{!isLogged && <Public />}
			{isLogged && <Private />}
		</Fragment>
	);
}
