import type { AxiosInstance } from 'axios';
import axios from 'axios';

export const API: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
});

export * as AuthService from './endpoints/auth';
export * as LeiauteService from './endpoints/leiaute';
export * as UserService from './endpoints/user';
export * as VersionService from './endpoints/version';
