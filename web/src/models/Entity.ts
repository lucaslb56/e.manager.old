import type { Base } from './Base';
import type { Column, ColumnGenerator } from './Column';

export interface Entity extends Base {
	// template_id?: string;
	name: string;
	prefix: string;
	active: boolean;
	parent: string;
	type: string;
	columns: Partial<Column>[];
}

export type EntityGenerator = Omit<
	Entity,
	'id' | 'created_at' | 'updated_at' | 'template_id'
> & {
	columns: ColumnGenerator[];
};

export interface Build {
	entities: Omit<Entity, 'id' | 'created_at' | 'updated_at' | 'columns'>[];
}
