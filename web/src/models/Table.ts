import type { Extract } from './Extract';
import type { Template } from './Template';
import type { User } from './User';

export type TableDataType = Template | User | Template | Extract;

export type TableData<T extends TableDataType> = T;
