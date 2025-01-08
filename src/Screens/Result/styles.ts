import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 20px 0; 
  //height: 90vh;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.bordeSec};
  //box-shadow: 0 1px 3px ${({ theme }) => theme.bordeSec};
  background-color: ${({ theme }) => theme.background};

  .info-class {
    margin-top: 40px;
    padding: 10px;
    background-color: ${({ theme }) => theme.background_2};;
  }

  ul {
    list-style-type: none;
    padding: 0;
    text-align: left;

    li {
      font-size: 1rem;
      font-family: ${({ theme }) => theme.fontPrimary};
      font-weight: ${({ theme }) => theme.fontRegular};
      color: ${({ theme }) => theme.text_primary};
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
    }

    .class-audio {
      justify-content: center;
      align-items: center;
      margin: 10px 0;
    }
  }
`;

export const Audio = styled.audio`
  margin-left: 10px;
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

// Estilo do bloco de informações sobre o dispositivo
export const DeviceInfo = styled.div`
  background-color: ${({ theme }) => theme.background_2};
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;

  p {
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fontPrimary};
    font-weight: ${({ theme }) => theme.fontRegular};
    color: ${({ theme }) => theme.text_primary};
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const BackButton = styled.button`
  margin-top: 20px;
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


export const ResultText = styled.p<{ isCorrect: boolean }>`
  font-size: 1rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: ${({ theme }) => theme.fontRegular};
  color: ${({ isCorrect, theme }) => (isCorrect ? theme.primary : theme.error)}; /* Verde se correto, vermelho se errado */
  margin-bottom: 20px;
`;