import type { AxiosResponse } from 'axios';

import { API } from '..';

import type { Build as BuildData, Entity } from '~/models/Entity';

export async function Build(data: BuildData): Promise<AxiosResponse<Entity[]>> {
	return await API.post('/entity/build', data);
}
