import type { AxiosInstance } from 'axios';
import axios from 'axios';

export const API: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
});

export * as AuthService from './endpoints/Auth';
export * as LeiauteService from './endpoints/Leiaute';
export * as UserService from './endpoints/User';
