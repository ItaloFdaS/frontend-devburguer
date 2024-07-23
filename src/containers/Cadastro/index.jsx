import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/Logo1.svg';

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

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('O preenchimento deste campo é obrigatório'),
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O preenchimento deste campo é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha requer no mínimo 6 caracteres')
        .required('Digite a sua senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password', 'As senhas devem ser idênticas')])
        .required('Confirme a sua senha'),
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
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Conta criada com sucesso!👍');
      } else if (status === 409) {
        toast.error('E-mail já cadastrado.😐');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Falha no sistema, tente novamente!😥');
    }
  };

  return (
    <Container>
      <ContainerLeft>
        <img src={Logo} alt="Logo-DevBurguer" />
      </ContainerLeft>
      <ContainerRight>
        <Title>Criar conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerInputs>
            <label>Nome</label>
            <input type="text" {...register('name')} />
            <p>{errors.name?.message}</p>
          </ContainerInputs>
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
          <ContainerInputs>
            <label>Confirmar senha</label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors.confirmPassword?.message}</p>
          </ContainerInputs>
          <ContainerButton type="submit">Criar conta</ContainerButton>
          <ForgotThePassword>
            Já possui conta? <Link to={'/login'}>Clique aqui.</Link>
          </ForgotThePassword>
        </Form>
      </ContainerRight>
    </Container>
  );
}
