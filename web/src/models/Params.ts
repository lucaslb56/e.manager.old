export interface QueryParams {
	page?: number;
	limit?: number;
	search?: string;
	order?: 'asc' | 'desc';
}

export interface ExportToCSVQueryParams {
	prefix?: string;
	_id?: string;
	initial_date?: string;
	final_date?: string;
}

export type QueryType = keyof QueryParams;

export type QueryValueType<T extends QueryType> = QueryParams[T];
