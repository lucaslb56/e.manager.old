import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

import { TemplatesContainer } from './styles';

import { Header } from '~/components/Header';

export function Templates(): ReactElement {
	const [search, setSearch] = useState('');

	function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
		setSearch(event.target.value);
	}

	return (
		<TemplatesContainer>
			<h1>Templates</h1>
			<Header
				createClick={(): void => console.log('click')}
				searchClick={(): void => console.log('click')}
				searchChange={handleSearch}
				placeholder="Pesquise por nome"
			/>
		</TemplatesContainer>
	);
}
