import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding: 40px;
  margin: 20px 0;
  height: 50vh; 
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.bordeSec};
  //box-shadow: 0 1px 3px ${({ theme }) => theme.bordeSec};
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

export const Subtitle = styled.h1`
  font-size: 1rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontSemiBold};
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
`;

export const Button = styled.button`
  //margin-top: 20px;
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
  
  //&:hover {
  //  background-color: ${({ theme }) => theme.secondary};
  //}
  //&:active {
  //  background-color: ${({ theme }) => theme.terciary};
 // }
`;
