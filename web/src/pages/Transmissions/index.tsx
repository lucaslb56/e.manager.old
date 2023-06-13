import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

import { TransmissionsContainer } from './styles';

import { Header } from '~/components/Header';

export function Transmissions(): ReactElement {
	const [search, setSearch] = useState('');

	function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
		setSearch(event.target.value);
	}

	return (
		<TransmissionsContainer>
			<h1>Transmissões</h1>
			<Header
				createClick={(): void => console.log('click')}
				searchClick={(): void => console.log('click')}
				searchChange={handleSearch}
				placeholder="Pesquise por nome"
			/>
		</TransmissionsContainer>
	);
}
