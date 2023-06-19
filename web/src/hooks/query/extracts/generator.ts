import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { ExtractService } from '~/api';
import type { ExtractGenerator } from '~/models/Extract';

async function mutator(form: FormData): Promise<ExtractGenerator[]> {
	const { data } = await ExtractService.generator(form);
	return data;
}
type UseExtractGeneratorType = UseMutationResult<
	ExtractGenerator[],
	Error | AxiosError,
	FormData
>;

export function useExtractGenerator(): UseExtractGeneratorType {
	return useMutation({
		mutationFn: (data: FormData) => mutator(data),
	});
}
