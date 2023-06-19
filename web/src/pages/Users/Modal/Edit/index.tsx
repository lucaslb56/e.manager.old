import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeClosed } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Button, Grid, Input } from '~/components/Mui';
import { queryClient } from '~/hooks/query';
import { KEYS } from '~/hooks/query/keys';
import { useCreateUser } from '~/hooks/query/user/create';
import type { User } from '~/models/User';
import type { CreateUserType } from '~/schemas/User';
import { CreateUserSchema } from '~/schemas/User';

interface EditProps {
	close: () => void;
	user: User;
}

export function Edit({ close, user }: EditProps): ReactElement {
	const [view, setView] = useState(false);

	const { mutateAsync: create } = useCreateUser();

	function toggleView(): void {
		setView((state) => !state);
	}

	const { register, handleSubmit, formState } = useForm<CreateUserType>({
		mode: 'all',
		resolver: zodResolver(CreateUserSchema),
		defaultValues: {
			...user,
		},
	});

	const { errors } = formState;

	function handleCreate(data: CreateUserType): void {
		create(data);
	}

	function handleClose() {
		queryClient.invalidateQueries([KEYS.USER_LIST]);
		close();
	}

	return (
		<Box>
			<form onSubmit={handleSubmit(handleCreate)}>
				<Grid
					container
					spacing={2}
				>
					<Grid
						item
						xs={6}
					>
						<Input
							size="small"
							placeholder={errors.email?.message ?? 'E-mail'}
							label={errors.email?.message ?? 'E-mail'}
							error={!!errors.email?.message}
							{...register('email')}
						/>
					</Grid>
					<Grid
						item
						xs={6}
					>
						<Input
							size="small"
							placeholder={errors.password?.message ?? 'Senha'}
							label={errors.password?.message ?? 'Senha'}
							type={view ? 'text' : 'password'}
							InputProps={{
								endAdornment: view ? (
									<Eye
										onClick={toggleView}
										size={20}
									/>
								) : (
									<EyeClosed
										onClick={toggleView}
										size={20}
									/>
								),
								style: {
									cursor: 'pointer',
								},
							}}
							error={!!errors.password?.message}
							{...register('password')}
						/>
					</Grid>
					<Grid
						item
						xs={12}
					>
						<Input
							size="small"
							placeholder={errors.name?.message ?? 'Nome completo'}
							label={errors.name?.message ?? 'Nome completo'}
							error={!!errors.name?.message}
							{...register('name')}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						display="flex"
						justifyContent="flex-end"
					>
						<Button
							type="submit"
							// onClick={close}
						>
							Atualizar
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
}
