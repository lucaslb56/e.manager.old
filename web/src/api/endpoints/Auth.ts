import type { AxiosResponse } from 'axios';

import { API } from '~/api';
import type { AuthRequest, AuthResponse } from '~/models/Auth';

export async function signin(
	data: AuthRequest,
): Promise<AxiosResponse<AuthResponse>> {
	const response = await API.post('/auth', data);
	return response;
}
