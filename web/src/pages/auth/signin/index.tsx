import { zodResolver } from '@hookform/resolvers/zod';
import { Stack, Typography } from '@mui/material';
import { AxiosError } from 'axios';
import { Eye, EyeSlash } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { Container, FormContainer } from './styles';

import { Large, Mui } from '~/components';
import { useAuth, useLogin } from '~/hooks';
import type { Token } from '~/models';

const SigninFormSchema = z.object({
	email: z
		.string({
			required_error: 'Informe um e-mail',
		})
		.email({ message: 'Informe um e-mail válido.' }),
	password: z.string().nonempty({
		message: 'Informe uma senha',
	}),
});

const MessageError = {
	E_INVALID_AUTH_PASSWORD: 'E-mail e/ou senha incorretos.',
};

type SigninFormInputs = z.infer<typeof SigninFormSchema>;

export function Signin(): ReactElement {
	const { login: storeLogin } = useAuth();

	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<SigninFormInputs>({
		mode: 'onSubmit',
		resolver: zodResolver(SigninFormSchema),
	});

	function onSuccess(data: Token): void {
		storeLogin({
			token: data.token,
		});
		navigate('/leiautes');
		reset();
		toast.success('Login efetuado com sucesso!');
	}

	function onError(error: Error | AxiosError): void {
		if (error instanceof AxiosError) {
			const message =
				MessageError[
					error.response?.data.errors[0].message?.split(
						':',
					)[0] as keyof typeof MessageError
				] || 'Internal server error';

			toast.error(message);
			return;
		}

		toast.error(error.message);
	}

	const { mutateAsync: mutateLogin } = useLogin({ onSuccess, onError });

	function handleSignin(data: SigninFormInputs): void {
		mutateLogin(data);
	}

	return (
		<Container>
			<Stack
				direction="row"
				gap={2}
			>
				<Large />
				<Typography
					variant="h3"
					fontWeight="bold"
				>
					eManager
				</Typography>
			</Stack>
			<form onSubmit={handleSubmit(handleSignin)}>
				<FormContainer spacing={2}>
					<Mui.TextField
						size="small"
						autoComplete="off"
						label={errors?.email?.message || 'E-mail'}
						placeholder="E-mail"
						error={Boolean(errors?.email?.message)}
						{...register('email')}
					/>

					<Mui.TextField
						size="small"
						autoComplete="off"
						label={errors?.password?.message || 'Senha'}
						placeholder="Senha"
						type={showPassword ? 'text' : 'password'}
						error={Boolean(errors?.password?.message)}
						InputProps={{
							endAdornment: (
								<Mui.Adornment position="end">
									{showPassword && (
										<EyeSlash
											onClick={(): void => setShowPassword((state) => !state)}
											size={20}
										/>
									)}

									{!showPassword && (
										<Eye
											onClick={(): void => setShowPassword((state) => !state)}
											size={20}
										/>
									)}
								</Mui.Adornment>
							),
						}}
						{...register('password')}
					/>

					<Mui.Button
						variant="contained"
						type="submit"
						size="large"
					>
						Entrar
					</Mui.Button>
				</FormContainer>
			</form>
		</Container>
	);
}
