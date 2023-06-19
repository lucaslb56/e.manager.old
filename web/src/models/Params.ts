export interface QueryParams {
	page?: number;
	limit?: number;
	search?: string;
	order?: 'asc' | 'desc';
}

export type QueryType = keyof QueryParams;

export type QueryValueType<T extends QueryType> = QueryParams[T];
