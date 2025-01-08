import styled from 'styled-components';

export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  touch-action: none;
  display: block;
  background: #fff;
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontSemiBold};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const Timer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;

  p {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Subtitle = styled.h1`
  font-size: 1rem;
  text-align: center;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontSemiBold};
  color: ${({ theme }) => theme.text_secondary};
`;

export const ButtonResult = styled.button`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontSemiBold};
  font-size: 16px; //font-size: 1rem;
  border-radius: 4px;
  width: 100%;
  align-items: center;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;


export const TestResult = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #000;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;
