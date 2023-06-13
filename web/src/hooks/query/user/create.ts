import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import { UserService } from '~/api';
import type { User } from '~/models/User';
import type { CreateUserType } from '~/schemas/User';

type UseCreateUser = UseMutationResult<User, unknown, CreateUserType, unknown>;

async function mutator(user: CreateUserType): Promise<User> {
	const { data } = await UserService.create(user);

	return data;
}

export function useCreateUser(): UseCreateUser {
	const mutation = useMutation({
		mutationFn: (data: CreateUserType) => mutator(data),
	});

	return mutation;
}
