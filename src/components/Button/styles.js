import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 350px;
  height: 52px;
  border-radius: 5px;
  border: none;
  opacity: 0px;
  width: 100%;
  background: #9758a6;
  font-size: 30px;
  color: #ffffff;
  font-family: 'Road Rage', sans-serif;

  &:hover {
    background-color: #6f357c;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
  }
`;
