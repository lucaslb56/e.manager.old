import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { ExtractService } from '~/api';
import type { ExportToCSVQueryParams } from '~/models/Params';

async function mutator(params: ExportToCSVQueryParams): Promise<void> {
	await ExtractService.exportToCSV(params);
}

export function useExportToCSV(): UseMutationResult<
	void,
	AxiosError | Error,
	ExportToCSVQueryParams,
	unknown
> {
	return useMutation({
		mutationFn: (query: ExportToCSVQueryParams) => mutator(query),
	});
}
