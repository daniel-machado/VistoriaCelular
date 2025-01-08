import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackButton, ResultText, Container, Title, Subtitle, Audio } from './styles'; // Importando os componentes estilizados
import { isMobile, isIOS, isAndroid, deviceType, browserName, browserVersion, osVersion } from 'react-device-detect';

const Result: React.FC = () => {
  const navigate = useNavigate(); // Usamos o useNavigate para navegação
  const location = useLocation();
  const { micQuality,
    audioUrl, 
    imei, 
    brand, 
    model, 
    capacity, 
    accessKey, 
    audioTestResult,
    audioHeard,
    coverage 
  } = location.state || {};

  const qualityMessage = (quality: number | null, type: string) => {
    if (quality === null) return 'Qualidade não disponível';
    return `${type} de qualidade: ${quality.toFixed(2)}%`;
  };

  const handleNavigateToHome = () => {
    navigate('/'); // Navega para a tela inicial
  };

  return (
    <Container>
        <Title>Resultado do Teste</Title>
        <div>
          <Subtitle>Informações do Dispositivo:</Subtitle>
          {/* Exibindo resultado do teste */}
          <ResultText isCorrect={audioTestResult}>
            {audioTestResult ? "Você acertou o som!" : "Resposta errada."}
          </ResultText>
          <ul>
          {audioUrl && (
              <li className='class-audio'>
                <strong>Áudio Gravado</strong>
                <Audio controls src={audioUrl} />
              </li>
            )}
            <li><strong>Chave de acesso:</strong> {accessKey}</li>
            <li><strong>IMEI:</strong> {imei}</li>
            <li><strong>Marca:</strong> {brand}</li>
            <li><strong>Modelo:</strong> {model}</li>
            <li><strong>Capacidade:</strong> {capacity}</li>
            <li><strong>Microfone:</strong>{qualityMessage(micQuality, 'Mic')}</li>
            <li><strong>Áudio Escutado:</strong> {audioHeard ? "Sim" : "Não"}</li>
            <li><strong>Cobertura Final:</strong> {coverage.toFixed(2)}%</li>
          </ul>
  
          <ul className='info-class'>
            <li><strong>Dispositivo Móvel:</strong> {isMobile ? 'Sim' : 'Não'}</li>
            <li><strong>Tipo de Dispositivo:</strong> {deviceType}</li>
            <li><strong>Sistema Operacional:</strong> {isIOS ? 'iOS' : isAndroid ? 'Android' : 'Desconhecido'} - {osVersion}</li>
            <li><strong>Navegador utilizado:</strong> {browserName} - {browserVersion}</li>
          </ul>
          </div>
        <BackButton onClick={handleNavigateToHome}>
          Finalizar
        </BackButton>
    </Container>
  );
};

export default Result;
