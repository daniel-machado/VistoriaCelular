import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AudioStyle, Button, ButtonsActions, ButtonsActionsFinally, ButtonSecondary, Container, ResultContent, Subtitle, Title, TitleError } from './styles';

const AudioInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [micQuality, setMicQuality] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState<number>(5); // Temporizador de 5 segundos
  const navigate = useNavigate();
  const location = useLocation();
  const { imei, brand, model, capacity, accessKey } = location.state;

  let mediaRecorder: MediaRecorder | null = null;
  let mediaStream: MediaStream | null = null; // Armazena o stream para desligar o microfone
  const audioChunks: Blob[] = [];

  // Função para calcular a qualidade do microfone
  const calculateMicQuality = (audioBuffer: Float32Array): number => {
    const rms = Math.sqrt(
      audioBuffer.reduce((sum, value) => sum + value ** 2, 0) / audioBuffer.length
    );

    // Escalar o RMS para uma porcentagem de qualidade (0%-100%)
    return Math.min(Math.max((rms - 0.01) * 1000, 0), 100);
  };

  const startRecording = async () => {
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(mediaStream);

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        try {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const audioBuffer = await audioBlob.arrayBuffer();
          const audioContext = new AudioContext();
          const decodedAudio = await audioContext.decodeAudioData(audioBuffer);

          // Processar o áudio para calcular a qualidade
          const audioData = decodedAudio.getChannelData(0);
          const quality = calculateMicQuality(audioData);

          // Atualizar os estados com os resultados
          setMicQuality(quality);
          setAudioUrl(URL.createObjectURL(audioBlob));
          setIsRecording(false);

          // Desligar o microfone
          stopMediaStream();
        } catch (error) {
          setError('Erro ao processar o áudio.');
          console.error(error);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Iniciar o temporizador de 5 segundos
      let countdown = 5;
      const interval = setInterval(() => {
        countdown -= 1;
        setTimer(countdown);

        if (countdown === 0) {
          clearInterval(interval);
          stopRecording();
        }
      }, 1000);
    } catch (err) {
      setError('Erro ao acessar o microfone');
      console.error(err);
    }
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setIsRecording(false);
    setTimer(5); // Resetar o temporizador
  };

  const stopMediaStream = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop()); // Desliga todas as faixas de áudio
      mediaStream = null;
    }
  };

  const handleRetry = () => {
    // Reiniciar todos os estados para refazer o teste
    setAudioUrl(null);
    setMicQuality(null);
    setError(null);
    audioChunks.length = 0; // Limpar os chunks de áudio
  };

  const goToNextScreen = () => {
    if (micQuality !== null && audioUrl) {
      navigate('/audiooutput', { state: { micQuality, audioUrl, imei, brand, model, capacity, accessKey } });
    } else {
      setError('Por favor, grave o áudio antes de continuar.');
    }
  };

  return (
    <Container>
      <Title>Testar Microfone</Title>
      {error && <TitleError style={{ color: 'red' }}>{error}</TitleError>}

      {!audioUrl && (
        <ButtonsActions>
          <Button onClick={startRecording} disabled={isRecording}>
            {isRecording ? 'Gravando...' : 'Iniciar Gravação'}
          </Button>
          {isRecording && <Subtitle>Gravando... {timer}s restantes</Subtitle>}
        </ButtonsActions>
      )}

      {audioUrl && micQuality !== null && (
        <ResultContent>
          <Subtitle>Resultados do Teste:</Subtitle>
          <Subtitle>Qualidade do Microfone: {micQuality.toFixed(2)}%</Subtitle  >
          <AudioStyle controls src={audioUrl} />
          <ButtonsActionsFinally>
            <Button onClick={goToNextScreen}>Próxima Tela</Button>
            <ButtonSecondary onClick={handleRetry}>Refazer Teste</ButtonSecondary>
          </ButtonsActionsFinally>
        </ResultContent>
      )}
    </Container>
  );
};

export default AudioInput;
