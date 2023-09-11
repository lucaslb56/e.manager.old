import type { Meta } from './Meta';

export interface Paginate<Type> {
	meta: Meta;
	data: Type[];
}
