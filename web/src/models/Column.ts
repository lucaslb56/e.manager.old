import type { Base } from './Base';

export interface Column extends Base {
	entity_id?: string;
	name: string;
	prefix: string;
	active: boolean;
	type: string;
	value?: string | number;
}

export type ColumnGenerator = Omit<
	Column,
	'id' | 'created_at' | 'updated_at' | 'value' | 'entity_id'
>;

export interface Build {
	columns: Omit<Column, 'id' | 'created_at' | 'updated_at' | 'value'>[];
}
