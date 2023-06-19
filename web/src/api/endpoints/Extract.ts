import type { AxiosResponse } from 'axios';

import { API } from '..';

import type { Extract, ExtractGenerator } from '~/models/Extract';
import type { ListPaginate } from '~/models/List';
import type { QueryParams } from '~/models/Params';

export async function list(
	params?: QueryParams,
): Promise<AxiosResponse<ListPaginate<Extract>>> {
	return await API.get<ListPaginate<Extract>>('/extract', { params });
}

export async function generator(
	data: FormData,
): Promise<AxiosResponse<ExtractGenerator[]>> {
	return await API.post('/template/extract', data);
}

export async function Build(
	data: ExtractGenerator[],
): Promise<AxiosResponse<Extract[]>> {
	return await API.post('/extract/build', data);
}
