import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 20px 0;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.bordeSec};
  //box-shadow: 0 1px 3px ${({ theme }) => theme.bordeSec};
  background-color: ${({ theme }) => theme.background};
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.text_primary};
`;

export const Subtitle = styled.h1`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontSemiBold};
  color: ${({ theme }) => theme.text_secondary};
`;

export const ButtonWithIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Espaço entre o ícone e o texto */
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  svg {
    font-size: 1.2rem; /* Tamanho do ícone */
  }
`;
