import styled from 'styled-components';

// Container principal da tela de resultado
export const ResultContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

// Container com o conteúdo principal do resultado
export const ResultContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #333;
  }

  ul {
    list-style-type: none;
    padding: 0;
    text-align: left;

    li {
      font-size: 1rem;
      color: #555;
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      font-weight: 600;
    }
  }
`;

// Estilo do bloco de informações sobre o dispositivo
export const DeviceInfo = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 1rem;
  text-align: left;

  p {
    margin: 5px 0;
    color: #555;
  }
`;

// Botão para voltar
export const BackButton = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #218838;
  }
`;
