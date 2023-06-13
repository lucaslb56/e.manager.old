import type { ReactElement } from 'react';

import { CancelButton, ConfirmButton, GridButton } from './styles';

import { Box, Grid } from '~/components/Mui';
import { KEYS } from '~/hooks/query/keys';
import { useCreateUser } from '~/hooks/query/user/create';
import type { User } from '~/models/User';

interface DeleteProps {
	close: () => void;
	user: User;
}

export function Delete({ close, user }: DeleteProps): ReactElement {
	const { mutateAsync: create } = useCreateUser();

	function handleClose() {
		queryClient.invalidateQueries([KEYS.USER_LIST]);
		close();
	}

	return (
		<Box>
			<p>Realmente deseja remover usuário?</p>
			<Grid
				container
				spacing={2}
			>
				<GridButton
					item
					xs={6}
				>
					<CancelButton
					// onClick={close}
					>
						Cancelar
					</CancelButton>
				</GridButton>
				<GridButton
					item
					xs={6}
				>
					<ConfirmButton
					// onClick={close}
					>
						Confirmar
					</ConfirmButton>
				</GridButton>
			</Grid>
		</Box>
	);
}
