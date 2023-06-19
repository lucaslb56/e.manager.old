import type { Entity } from './Entity';
import type { Extract } from './Extract';
import type { Meta } from './Meta';
import type { Template } from './Template';
import type { User } from './User';

export type ListEntity = Template | User | Entity | Extract;

export interface List<T extends ListEntity> {
	data: T[];
}

export interface ListPaginate<T extends ListEntity> extends List<T> {
	meta: Meta;
}
