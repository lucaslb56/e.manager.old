import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { TemplateService } from '~/api';
import type { EntityGenerator } from '~/models/Entity';

async function mutator(form: FormData): Promise<EntityGenerator[]> {
	const { data } = await TemplateService.generator(form);
	return data;
}
type UseTemplateGeneratorType = UseMutationResult<
	EntityGenerator[],
	Error | AxiosError,
	FormData
>;

export function useTemplateGenerator(): UseTemplateGeneratorType {
	return useMutation({
		mutationFn: (data: FormData) => mutator(data),
	});
}
