/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeSlash } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
	FormButtonBox,
	FormGroupBox,
	FormHeaderBox,
	FormInputBox,
	FormInputControl,
	SigninContainer,
	SigninForm,
} from './styles';

import { useAuth } from '~/hooks/Auth';

const SigninFormSchema = z.object({
	email: z.string().email({ message: 'Informe um e-mail válido.' }),
	password: z.string().min(1, { message: 'Informe uma senha.' }),
});

type SigninFormType = z.infer<typeof SigninFormSchema>;

type VisibleSigninFormInput = Omit<
	{ [P in keyof SigninFormType]: boolean },
	'email'
>;

type VisibleSigninFormInputKey = keyof VisibleSigninFormInput;

export function Signin(): ReactElement {
	const { signIn } = useAuth();

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<SigninFormType>({
		mode: 'all',
		resolver: zodResolver(SigninFormSchema),
	});

	const [isVisible, setIsVisible] = useState<VisibleSigninFormInput>({
		password: false,
	});

	function handleVisibility(target: VisibleSigninFormInputKey): void {
		setIsVisible((state) => ({ ...state, [target]: !state[target] }));
	}

	async function handleSignin(data: SigninFormType): Promise<void> {
		try {
			await signIn(data);

			reset();
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<SigninContainer>
			<SigninForm onSubmit={handleSubmit(handleSignin)}>
				<FormHeaderBox>
					<h1>eManager</h1>
					<p>Seu gerenciador de templates e dados e-social</p>
				</FormHeaderBox>

				<FormGroupBox>
					<FormInputBox>
						<label>E-mail</label>
						<FormInputControl error={Boolean(errors.email?.message)}>
							<input
								type="email"
								placeholder="example@mail.com"
								{...register('email')}
							/>
						</FormInputControl>
						{errors.email?.message && <span>* {errors.email.message}</span>}
					</FormInputBox>

					<FormInputBox>
						<label>Senha</label>
						<FormInputControl error={Boolean(errors.password?.message)}>
							<input
								type={isVisible.password ? 'text' : 'password'}
								placeholder="Sua senha aqui"
								{...register('password')}
							/>

							{isVisible.password && (
								<EyeSlash
									fill="bold"
									size={16}
									onClick={(): void => handleVisibility('password')}
								/>
							)}

							{!isVisible.password && (
								<Eye
									fill="bold"
									size={16}
									onClick={(): void => handleVisibility('password')}
								/>
							)}
						</FormInputControl>
						{errors.password?.message && (
							<span>* {errors.password.message}</span>
						)}
					</FormInputBox>

					<FormButtonBox>
						<button>Entrar</button>
					</FormButtonBox>
				</FormGroupBox>
			</SigninForm>
		</SigninContainer>
	);
}
