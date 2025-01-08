import styled from 'styled-components';

interface CardProps {
  selected: boolean;
}

interface ResultProps {
  isCorrect: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 20px 0;
  width: 90vw;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.bordeSec};
  //box-shadow: 0 1px 3px ${({ theme }) => theme.bordeSec};
  background-color: ${({ theme }) => theme.background};
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.text_primary};
`;

export const Subtitle = styled.h1`
  font-size: 1rem;
  text-align: center;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontSemiBold};
  color: ${({ theme }) => theme.text_secondary};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;
export const Card = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.background_2};
  border: 2px solid ${({ selected, theme }) => (selected ? 
    theme.background_2 : 
    theme.bordeSec 
  )};
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ selected }) => (selected ? "#d4edda" : "#f1f1f1")};
  }
`;

export const Result = styled.p<ResultProps>`
  font-size: 1rem;
  text-align: center;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontSemiBold};
  color: ${({ isCorrect, theme }) => (isCorrect 
    ? theme.primary 
    : theme.error
  )};
`;

export const ButtonsActionsFinally = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
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


