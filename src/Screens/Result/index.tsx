import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DeviceInfo, ResultContainer, ResultContent, BackButton } from './styles'; // Importando os componentes estilizados
import { isMobile, isIOS, isAndroid, deviceType, browserName, browserVersion, osVersion } from 'react-device-detect';

const Result: React.FC = () => {
  const navigate = useNavigate(); // Usamos o useNavigate para navegação
  const location = useLocation();
  const { imei, brand, model, capacity, accessKey, coverage } = location.state;

  const handleNavigateToHome = () => {
    navigate('/'); // Navega para a tela inicial
  };

  return (
    <ResultContainer>
      <ResultContent>
        <h1>Resultado do Teste</h1>

        <div>
          <h3>Informações do Dispositivo:</h3>
          <ul>
            <li><strong>IMEI:</strong> {imei}</li>
            <li><strong>Marca:</strong> {brand}</li>
            <li><strong>Modelo:</strong> {model}</li>
            <li><strong>Capacidade:</strong> {capacity}</li>
            <li><strong>Acesso:</strong> {accessKey}</li>
            <li><strong>Cobertura Final:</strong> {coverage.toFixed(2)}%</li>
          </ul>
        </div>

        <div>
          <h3>Informações do Dispositivo:</h3>
          <DeviceInfo>
            <p><strong>Sistema Operacional:</strong> {osVersion}</p>
            <p><strong>Versão do Sistema Operacional:</strong> {isIOS ? 'iOS' : isAndroid ? 'Android' : 'Desconhecido'}</p>
            <p><strong>Tipo de Dispositivo:</strong> {deviceType}</p>
            <p><strong>Navegador:</strong> {browserName}</p>
            <p><strong>Versão do Navegador:</strong> {browserVersion}</p>
            <p><strong>Dispositivo Móvel:</strong> {isMobile ? 'Sim' : 'Não'}</p>
          </DeviceInfo>
        </div>

        <BackButton onClick={handleNavigateToHome}>
          Voltar para a Tela Inicial
        </BackButton>
      </ResultContent>
    </ResultContainer>
  );
};

export default Result;
