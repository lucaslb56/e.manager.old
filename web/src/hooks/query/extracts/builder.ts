/* eslint-disable no-unused-vars */
import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { ExtractService } from '~/api';
import type { ExtractGenerator } from '~/models/Extract';

async function mutator(data: ExtractGenerator[]): Promise<void> {
	await ExtractService.Build(data);
}

type UseExtractBuilderType = UseMutationResult<
	void,
	Error | AxiosError,
	ExtractGenerator[]
>;

interface UseExtractBuilderProps {
	success: () => void;
}

export function useExtractBuilder({
	success,
}: UseExtractBuilderProps): UseExtractBuilderType {
	return useMutation({
		mutationFn: (data: ExtractGenerator[]) => mutator(data),
		onSettled: () => success(),
	});
}
