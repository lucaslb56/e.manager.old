/* eslint-disable no-unused-vars */
import { MagnifyingGlass, Plus } from 'phosphor-react';
import type { ChangeEvent, ReactElement } from 'react';

import { Input } from '../Mui';

import { Button, HeaderBox, SearchBox } from './styles';

interface HeaderProps {
	placeholder: string;
	searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
	searchClick: () => void;
	createClick: () => void;
}

export function Header({
	searchChange,
	searchClick,
	createClick,
	placeholder,
}: HeaderProps): ReactElement {
	return (
		<HeaderBox>
			<SearchBox>
				<Input
					type="text"
					placeholder={placeholder}
					label={placeholder}
					onChange={searchChange}
					size="small"
				/>

				<Button
					onClick={searchClick}
					size="small"
					variant="contained"
				>
					<MagnifyingGlass
						size={16}
						weight="bold"
					/>
					Buscar
				</Button>
			</SearchBox>
			<Button
				onClick={createClick}
				size="small"
				variant="contained"
			>
				<Plus
					size={16}
					weight="bold"
				/>
				Adicionar
			</Button>
		</HeaderBox>
	);
}
