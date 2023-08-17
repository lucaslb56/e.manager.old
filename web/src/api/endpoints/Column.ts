import type { AxiosResponse } from 'axios';

import { API } from '..';

import type { Build as BuildData, Column } from '~/models/Column';

export async function Build(data: BuildData): Promise<AxiosResponse<Column[]>> {
	return await API.post('/column/build', data);
}
