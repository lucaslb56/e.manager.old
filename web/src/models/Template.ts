import type { Base } from './Base';

export interface Template extends Base {
	name: string;
	version: string;
	active: boolean;
}
