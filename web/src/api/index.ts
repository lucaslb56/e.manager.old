import type { AxiosInstance } from 'axios';
import axios from 'axios';

export const API: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
});

export * as AuthService from './endpoints/Auth';
export * as ColumnService from './endpoints/Column';
export * as EntityService from './endpoints/Entity';
export * as ExtractService from './endpoints/Extract';
export * as TemplateService from './endpoints/Template';
export * as UserService from './endpoints/User';
