import type { AxiosResponse } from 'axios';

import { API } from '..';

import type { Template } from '~/models/Template';

export async function list(): Promise<AxiosResponse<Template[]>> {
	return await API.get<Template[]>('/templates');
}
