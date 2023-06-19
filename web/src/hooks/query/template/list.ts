import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { KEYS } from '../keys';

import { TemplateService } from '~/api';
import type { ListPaginate } from '~/models/List';
import type { QueryParams } from '~/models/Params';
import type { Template } from '~/models/Template';

async function fetcher(params?: QueryParams): Promise<ListPaginate<Template>> {
	const { data } = await TemplateService.list(params);

	return data;
}

type UseTemplateListType = UseQueryResult<
	ListPaginate<Template>,
	Error | AxiosError
>;

export function useTemplateList(params?: QueryParams): UseTemplateListType {
	return useQuery({
		queryKey: [KEYS.TEMPLATES, params],
		queryFn: () => fetcher(params),
	});
}
