/* eslint-disable no-unused-vars */
import { create } from 'zustand';

interface ModalData<T> {
	data?: T;
	key: string;
}

export interface UseModal<T> {
	isOpen: boolean;
	data: T | null;
	key: string;
	open: ({ key, data }: ModalData<T>) => void;
	close: () => void;
}
export const useModal = create<UseModal<unknown>>((set) => ({
	isOpen: false,
	data: null,
	key: 'modal',
	open: ({ key, data }: ModalData<unknown>): void =>
		set((state) => ({ ...state, isOpen: true, data, key })),
	close: (): void =>
		set((state) => ({ ...state, isOpen: false, data: null, key: 'modal' })),
}));
