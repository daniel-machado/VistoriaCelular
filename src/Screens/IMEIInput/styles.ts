import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fafafa; /* Fundo claro */
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #28a745;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const Select = styled.select`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: center;
  background-color: #fff;
  
  &:focus {
    outline: none;
    border-color: #28a745;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
  }
`;

export const Option = styled.option`
  padding: 10px;
  font-size: 1rem;
  color: #333;
  background-color: #fff;

  &:hover {
    background-color: #f1f1f1;
  }
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
