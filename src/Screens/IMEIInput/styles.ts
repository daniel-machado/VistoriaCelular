import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 20px 0;
  height: 90vh; 
  width: 90vw;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.bordeSec};
  //box-shadow: 0 1px 3px ${({ theme }) => theme.bordeSec};
  background-color: ${({ theme }) => theme.background};
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
    border-color: ${({ theme }) => theme.primary};
    //box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const Select = styled.select`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontMedium};
  color: ${({ theme }) => theme.text_primary};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};;
    //box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
  }
`;

export const Option = styled.option`
  padding: 10px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
  &:focus {
    background-color: ${({ theme }) => theme.secondary};
  }
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
