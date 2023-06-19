/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import { InputAdornment } from '@mui/material';
import { Eye, EyeSlash } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
	FormGroupBox,
	FormHeaderBox,
	SigninContainer,
	SigninForm,
} from './styles';

import { Button, Input } from '~/components/Mui';
import { useAuth } from '~/hooks/Auth';

const SigninFormSchema = z.object({
	email: z.string().nonempty({ message: 'Informe um e-mail.' }).email({
		message: 'Informe um e-mail válido.',
	}),
	password: z.string().nonempty({ message: 'Informe sua senha.' }),
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
					<Input
						size="small"
						placeholder="E-mail"
						label={errors.email?.message ?? 'E-mail'}
						error={Boolean(errors.email?.message)}
						{...register('email')}
					/>

					<Input
						size="small"
						placeholder="Senha"
						label={errors.password?.message ?? 'Senha'}
						type={isVisible.password ? 'text' : 'password'}
						InputProps={{
							endAdornment: (
								<InputAdornment
									position="end"
									style={{ cursor: 'pointer' }}
								>
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
								</InputAdornment>
							),
						}}
						error={Boolean(errors.password?.message)}
						{...register('password')}
					/>

					<Button
						type="submit"
						size="large"
						variant="contained"
					>
						Entrar
					</Button>
				</FormGroupBox>
			</SigninForm>
		</SigninContainer>
	);
}
