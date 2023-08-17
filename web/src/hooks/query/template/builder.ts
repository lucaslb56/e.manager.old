/* eslint-disable no-unused-vars */
import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { TemplateService } from '~/api';
import type { CreateTemplate } from '~/schemas/Template';
async function mutator(form: Omit<CreateTemplate, 'template'>): Promise<void> {
	const { data: create } = await TemplateService.create({
		name: form.name,
		prefix: form.prefix,
		version: form.version,
	});

	const { data: template } = await TemplateService.show(create);

	await TemplateService.Build({ ...template, entities: form.entities });
}
type UseTemplateBuilderType = UseMutationResult<
	void,
	Error | AxiosError,
	Omit<CreateTemplate, 'template'>
>;

interface UseTemplateBuilderProps {
	success: () => void;
}

export function useTemplateBuilder({
	success,
}: UseTemplateBuilderProps): UseTemplateBuilderType {
	return useMutation({
		mutationFn: (data: Omit<CreateTemplate, 'template'>) => mutator(data),
		onSettled: () => success(),
	});
}
