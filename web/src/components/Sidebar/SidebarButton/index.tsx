import type { Icon as NavIconType } from 'phosphor-react';
import type { HTMLAttributes, ReactElement } from 'react';

import { ButtonLinkContainer } from './styles';

import type { RoutePath } from '~/models/Route';

interface SidebarButtonProps
	extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
	label: string;
	path?: RoutePath;
	Icon: NavIconType;
}

export function SidebarButton({
	label,
	path,
	Icon,
	...rest
}: SidebarButtonProps): ReactElement {
	return (
		<ButtonLinkContainer
			to={`/${path}`}
			{...rest}
		>
			{Icon && (
				<Icon
					size={20}
					weight="fill"
				/>
			)}
			{label}
		</ButtonLinkContainer>
	);
}
