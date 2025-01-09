import styled from "styled-components";

export const ButtonWithIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Espaço entre o ícone e o texto */
  padding: 12px 24px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.background};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontMedium};
  color: ${({ theme }) => theme.primary};

  svg {
    font-size: .8rem; /* Tamanho do ícone */
  }
`;
