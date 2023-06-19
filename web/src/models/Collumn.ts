import type { Base } from './Base';

export interface Collumn extends Base {
	entity_id?: string;
	name: string;
	prefix: string;
	active: boolean;
	type: string;
	value?: string | number;
}

export type CollumnGenerator = Omit<
	Collumn,
	'id' | 'created_at' | 'updated_at' | 'value' | 'entity_id'
>;

export interface Build {
	collumns: Omit<Collumn, 'id' | 'created_at' | 'updated_at' | 'value'>[];
}
