import { useContext } from 'react';

import type { AuthContextType } from '~/contexts/Auth';
import { AuthContext } from '~/contexts/Auth';

export function useAuth(): AuthContextType {
	const context = useContext(AuthContext);

	if (!context) throw new Error('useAuth precisa ser usado com o AuthProvider');

	return context;
}
