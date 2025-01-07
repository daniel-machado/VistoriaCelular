import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 100vh; 
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }

  &:active {
    background-color: #1e7e34;
  }
`;
