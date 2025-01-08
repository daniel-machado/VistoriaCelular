import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 20px 0;
  height: 70vh; 
  width: 90vw;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.bordeSec};
  //box-shadow: 0 1px 3px ${({ theme }) => theme.bordeSec};
  background-color: ${({ theme }) => theme.background};
`;

export const ButtonsActions = styled.div``;

export const ResultContent = styled.div``;

export const AudioStyle = styled.audio`
  margin: 20px;
  
  border: 2px solid ${({ theme }) => theme.background};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  outline: none;
`;

export const ButtonsActionsFinally = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 7px;
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

export const TitleError = styled.h1`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontLight};
  color: ${({ theme }) => theme.error};
`;

export const ButtonSecondary = styled.button`
  //margin-top: 20px;
  background-color: ${({ theme }) => theme.background};;
  color: ${({ theme }) => theme.primary};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontSemiBold};
  font-size: 1rem; //font-size: 1rem;
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

export const Button = styled.button`
  //margin-top: 20px;
  background-color: ${({ disabled, theme }) => 
    disabled ? theme.borderLight : theme.primary};
  color: ${({ disabled, theme }) => 
    disabled ? theme.bordeSec : theme.background};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontSemiBold};
  font-size: 16px; //font-size: 1rem;
  border-radius: 4px;
  width: 100%;
  align-items: center;
  padding: 12px 24px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
  
  //&:hover {
  //  background-color: ${({ theme }) => theme.secondary};
  //}
  //&:active {
  //  background-color: ${({ theme }) => theme.terciary};
 // }
`;


