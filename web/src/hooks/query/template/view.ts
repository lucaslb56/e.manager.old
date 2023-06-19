import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { KEYS } from '../keys';

import { TemplateService } from '~/api';
import type { Template } from '~/models/Template';

async function fetcher(template: Partial<Template>): Promise<Template> {
	const { data } = await TemplateService.show(template as Template);

	return data;
}

type UseTemplateViewType = UseQueryResult<Template, Error | AxiosError>;

export function useTemplateView(
	template: Partial<Template>,
): UseTemplateViewType {
	return useQuery({
		queryKey: [KEYS.TEMPLATE, template.id],
		queryFn: () => fetcher(template),
		cacheTime: 0,
	});
}
