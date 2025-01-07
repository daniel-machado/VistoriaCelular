import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 100vh; 
  flex-direction: column;
`;

export const Title = styled.h1``;

export const Button = styled.button`
  display: flex; 
  margin: 10px;
  align-items: center; 
  justify-content: center; 
  padding: 7px 12px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 16px;
  cursor: pointer;
`;
