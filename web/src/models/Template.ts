import type { Base } from './Base';
import type { Entity } from './Entity';

export interface Template extends Base {
	name: string;
	prefix: string;
	version: string;
	active: boolean;
	entities: Partial<Entity>[];
}

export type Create = Pick<Template, 'name' | 'prefix' | 'version'>;
