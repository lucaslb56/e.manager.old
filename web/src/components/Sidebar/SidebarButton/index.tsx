import type { Icon } from 'phosphor-react';
import type { HTMLAttributes, ReactElement } from 'react';

import { Button } from './styles';

import type { MenuPath } from '~/models/Menu';

interface SidebarButtonProps
	extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
	label: string;
	path?: MenuPath;
	Icon: Icon;
}

export function SidebarButton({
	label,
	Icon,
	path,
	...rest
}: SidebarButtonProps): ReactElement {
	return (
		<Button
			to={`/${path}`}
			{...rest}
		>
			<Icon size={25} />
			{label}
		</Button>
	);
}
