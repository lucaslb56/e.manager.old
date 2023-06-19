/* eslint-disable no-unused-vars */
import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { CollumnService, EntityService, TemplateService } from '~/api';
import type { CreateTemplate } from '~/schemas/Template';
async function mutator(form: Omit<CreateTemplate, 'template'>): Promise<void> {
	const { data: create } = await TemplateService.create({
		name: form.name,
		prefix: form.prefix,
		version: form.version,
	});

	const { data: entities } = await EntityService.Build({
		entities: form.entities.map(({ collumns, ...rest }) => ({
			template_id: create.id,
			...rest,
		})),
	});

	await CollumnService.Build({
		collumns: form.entities.flatMap((item, index) => {
			if (item.prefix === entities[index].prefix) {
				return item.collumns.map((item) => ({
					entity_id: entities[index].id,
					...item,
				}));
			}

			return [];
		}),
	});

	const { data: template } = await TemplateService.show(create);

	await TemplateService.Build(template);
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
