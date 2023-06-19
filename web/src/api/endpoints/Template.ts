import type { AxiosResponse } from 'axios';

import { API } from '..';

import type { EntityGenerator } from '~/models/Entity';
import type { ListPaginate } from '~/models/List';
import type { QueryParams } from '~/models/Params';
import type { Create, Template } from '~/models/Template';

export async function list(
	params?: QueryParams,
): Promise<AxiosResponse<ListPaginate<Template>>> {
	return await API.get<ListPaginate<Template>>('/template', { params });
}

export async function show(
	template: Template,
): Promise<AxiosResponse<Template>> {
	return await API.get(`/template/${template.id}`);
}

export async function generator(
	data: FormData,
): Promise<AxiosResponse<EntityGenerator[]>> {
	return await API.post('/template/generator', data);
}

export async function create(data: Create): Promise<AxiosResponse<Template>> {
	return await API.post('/template', data);
}

export async function Build(data: Template): Promise<AxiosResponse<void>> {
	return await API.post('/template/build', data);
}
