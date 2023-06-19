export interface AuthRequest {
	email: string;
	password: string;
}

export interface AuthResponse {
	token: string;
	type: string;
}

export type AuthStatusResponseType = 200 | 401 | 500 | 404 | 422;

export const AuthStatusResponse = {
	200: 'Login efetuado com sucesso.',
	401: 'Credenciais inválidas.',
	422: 'Credenciais inválidas.',
	404: 'Houve um erro ao tentar solicitat recurso.',
	500: 'Erro interno de servidor. Por favor, entre em contato com o suporte.',
} as const;
