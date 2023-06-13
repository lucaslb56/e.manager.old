import type { AxiosInstance } from 'axios';
import axios from 'axios';

export const API: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
});

export * as AuthService from './endpoints/Auth';
export * as TemplateService from './endpoints/Template';
export * as UserService from './endpoints/User';
