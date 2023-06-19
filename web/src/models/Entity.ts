import type { Base } from './Base';
import type { Collumn, CollumnGenerator } from './Collumn';

export interface Entity extends Base {
	template_id?: string;
	name: string;
	prefix: string;
	active: boolean;
	parent: string;
	type: string;
	collumns: Collumn[];
}

export type EntityGenerator = Omit<
	Entity,
	'id' | 'created_at' | 'updated_at' | 'template_id'
> & {
	collumns: CollumnGenerator[];
};

export interface Build {
	entities: Omit<Entity, 'id' | 'created_at' | 'updated_at' | 'collumns'>[];
}
