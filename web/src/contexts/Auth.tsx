/* eslint-disable no-unused-vars */
import { AxiosError } from 'axios';
import type { ReactElement, ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { API, AuthService } from '~/api';
import type { AuthRequest, AuthStatusResponseType } from '~/models/Auth';
import { AuthStatusResponse } from '~/models/Auth';

export interface AuthContextType {
	isLogged: boolean;
	signIn: (auth: AuthRequest) => Promise<void>;
	signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
	children: ReactNode;
}

const AUTH_STORAGE_KEY = 'EMANAGER:AUTH@1.0.0';

export function AuthProvider({ children }: AuthProviderProps): ReactElement {
	const navigate = useNavigate();

	const [isLogged, setIsLogged] = useState<boolean>(false);

	const [authToken, setAuthToken] = useState<string>(() => {
		const storageToken = localStorage.getItem(AUTH_STORAGE_KEY) || '';

		if (storageToken) {
			API.defaults.headers.Authorization = `Bearer ${storageToken}`;
			setIsLogged(true);
		}

		return storageToken;
	});

	async function signIn(auth: AuthRequest): Promise<void> {
		try {
			const { data, status } = await AuthService.signin(auth);

			setAuthToken(data.token);

			API.defaults.headers.Authorization = `Bearer ${data.token}`;
			setIsLogged(true);

			navigate('/extracts');

			toast.info(AuthStatusResponse[status as AuthStatusResponseType]);
		} catch (error) {
			if (error instanceof AxiosError) {
				toast.error(
					AuthStatusResponse[
						(error.response?.status ?? 500) as AuthStatusResponseType
					],
				);
			}
			console.log(error);
		}
	}

	function signOut(): void {
		try {
			setAuthToken('');

			setIsLogged(false);

			navigate('/signin');

			toast.info('Logout efetuado com sucesso!');
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		if (authToken) {
			localStorage.setItem(AUTH_STORAGE_KEY, authToken);
			API.defaults.headers.Authorization = `Bearer ${authToken}`;
		}

		if (!authToken) {
			localStorage.removeItem(AUTH_STORAGE_KEY);
			API.defaults.headers.Authorization = null;
		}
	}, [authToken]);

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				isLogged,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
