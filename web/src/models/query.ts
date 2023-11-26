interface QueryDate {
	initial: string;
	final: string;
}
export interface Query {
	search?: string;
	page?: number;
	limit?: number;
	order?: 'asc' | 'desc';
	date?: QueryDate;
}

export type QueryType<Type> = keyof Type;

export type QueryValueType<Type, Key extends QueryType<Type>> = Type[Key];
