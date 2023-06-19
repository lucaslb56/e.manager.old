import type { AxiosResponse } from 'axios';

import { API } from '..';

import type { Build as BuildData, Collumn } from '~/models/Collumn';

export async function Build(
	data: BuildData,
): Promise<AxiosResponse<Collumn[]>> {
	return await API.post('/collumn/build', data);
}
