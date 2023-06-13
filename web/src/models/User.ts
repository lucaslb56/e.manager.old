import type { Base } from './Base';

export interface User extends Base {
	name: string;
	email: string;
	active: boolean;
	password: string;
}
