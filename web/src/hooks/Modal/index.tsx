/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
import { X } from 'phosphor-react';
import type { FunctionComponent, ReactElement, ReactNode } from 'react';
import { useState } from 'react';

import { Body, Content, Header, Title } from './styles';

import * as Mui from '~/components/Mui';
interface UseModalType {
	Modal: FunctionComponent;
	open: (data: Omit<ModalStateType, 'isOpen'>) => void;
	close: () => void;
}

interface ModalStateType {
	isOpen: boolean;
	component: ReactNode | null;
	title: string | null;
}

const ModalIntialState: ModalStateType = {
	isOpen: false,
	component: null,
	title: null,
};

export function useModal(): UseModalType {
	const [modal, setModal] = useState<ModalStateType>(ModalIntialState);

	function open(data: Omit<ModalStateType, 'isOpen'>): void {
		setModal((state) => ({ ...state, ...data, isOpen: true }));
	}

	function close(): void {
		setModal((state) => ({ ...state, ...ModalIntialState }));
	}

	function Modal(): ReactElement {
		return (
			<Mui.Modal
				open={modal.isOpen}
				onClose={close}
			>
				<Box>
					<Body>
						<Header>
							<Title>{modal.title}</Title>
							<X
								size={22}
								onClick={close}
							/>
						</Header>
						<Content>{modal.component}</Content>
					</Body>
				</Box>
			</Mui.Modal>
		);
	}

	return { Modal, open, close };
}
