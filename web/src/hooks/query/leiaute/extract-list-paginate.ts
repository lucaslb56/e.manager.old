import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { KEYS } from '../keys';

import { LeiauteService } from '~/api';
import type { Extract, LeiauteQuery } from '~/models/Leiaute';
import type { Paginate } from '~/models/Paginate';

async function fetcher(params?: LeiauteQuery): Promise<Paginate<Extract>> {
	const { data } = await LeiauteService.extractList(params);

	return data;
}

type UseExtractPaginate = UseQueryResult<Paginate<Extract>, Error | AxiosError>;

export function useExtractPaginate(params?: LeiauteQuery): UseExtractPaginate {
	return useQuery({
		queryKey: [KEYS['EXTRACT-PAGINATE-LIST'], params],
		queryFn: () => fetcher(params),
		enabled: !!params?.version && !!params?.prefix,
	});
}
