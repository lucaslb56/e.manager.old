import type { Template } from './Template';
import type { User } from './User';

export type TableDataType = Template | User | Template;

export type TableData<T extends TableDataType> = T;
