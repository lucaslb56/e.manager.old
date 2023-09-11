import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { LeiauteService } from '~/api';
import type { LeiauteQuery } from '~/models/Leiaute';

async function mutator(params?: LeiauteQuery): Promise<void> {
	await LeiauteService.report(params);
}

export function useLeiauteReport(): UseMutationResult<
	void,
	Error | AxiosError,
	LeiauteQuery | undefined
> {
	return useMutation({
		mutationFn: (params?: LeiauteQuery) => mutator(params),
	});
}
