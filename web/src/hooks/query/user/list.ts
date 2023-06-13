import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { KEYS } from '../keys';

import { UserService } from '~/api';
import type { User } from '~/models/User';

async function fetch(): Promise<User[]> {
	const { data } = await UserService.list();
	return data;
}

type UseUserListType = UseQueryResult<User[], unknown>;

export function useUserList(): UseUserListType {
	const query = useQuery({
		queryKey: [KEYS.USER_LIST],
		queryFn: () => fetch(),
	});
	return query;
}
