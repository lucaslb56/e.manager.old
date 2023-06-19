import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { KEYS } from '../keys';

import { ExtractService } from '~/api';
import type { Extract } from '~/models/Extract';
import type { ListPaginate } from '~/models/List';
import type { QueryParams } from '~/models/Params';

async function fetcher(params?: QueryParams): Promise<ListPaginate<Extract>> {
	const { data } = await ExtractService.list(params);

	return data;
}

type UseExtractListType = UseQueryResult<
	ListPaginate<Extract>,
	Error | AxiosError
>;

export function useExtractList(params?: QueryParams): UseExtractListType {
	return useQuery({
		queryKey: [KEYS.EXTRACTS, params],
		queryFn: () => fetcher(params),
	});
}
