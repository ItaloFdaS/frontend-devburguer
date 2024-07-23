import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';

import { toast } from 'react-toastify';

import Logo from '../../assets/Logo1.svg';

import { useNavigate } from 'react-router-dom';

import { ContainerButton } from '../../components/Button/styles';

import {
  Container,
  ContainerInputs,
  ContainerLeft,
  ContainerRight,
  ForgotThePassword,
  Form,
  Title,
  Link,
} from './styles';

export function Login() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O preenchimento deste campo é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha requer no mínimo 6 caracteres')
        .required('O preenchimento deste campo é obrigatório'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Consultando os seus dados',
        success: {
          render() {
            setTimeout(() => {
              navigate('/');
            }, 2000);
            return 'Seja bem-vindo(a) 👌';
          },
        },
        error: 'E-mail ou senha incorretos 🤯',
      },
    );
  };

  return (
    <Container>
      <ContainerLeft>
        <img src={Logo} alt="Logo-DevBurguer" />
      </ContainerLeft>
      <ContainerRight>
        <Title>
          Olá, seja bem vindo ao <span> Dev Burguer!</span> <br /> Acesse com
          seu
          <span> login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerInputs>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors.email?.message}</p>
          </ContainerInputs>
          <ContainerInputs>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors.password?.message}</p>
          </ContainerInputs>
          <ContainerButton type="submit">Entrar</ContainerButton>
          <ForgotThePassword>
            Não possui conta? <Link to={'/cadastro'}>Clique aqui.</Link>
          </ForgotThePassword>
        </Form>
      </ContainerRight>
    </Container>
  );
}
