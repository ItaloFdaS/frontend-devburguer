import styled from 'styled-components';

import BackgroundLogin from '../../assets/bg1.svg';

import BackgroundStandart from '../../assets/Padrao1.svg';

import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const ContainerLeft = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 50%;
  background: url('${BackgroundStandart}');
  background-color: #1e1e1e;
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  letter-spacing: 1px;
  font-weight: 400;
  color: #9758a6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 27px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-weight: 600px;
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: red;
    font-weight: 600px;
    height: 10px;
  }
`;

export const ForgotThePassword = styled.p`
  a {
    text-decoration: underline;
    &:hover {
      color: #6f357c;
    }
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: white;
`;
