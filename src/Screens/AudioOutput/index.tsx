import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { sounds } from "../../Data/sounds"; // Supondo que os sons estão sendo importados de um arquivo
import { Container, Title, Button, Card, CardContainer, Result, Subtitle, ButtonsActionsFinally, ButtonSecondary } from './styles';

// Tipo para os itens do array `sounds`
interface Sound {
  audio: string;
  correctAnswer: string;
  options: string[];
}

const AudioOutput = () => {
  const [selectedSound, setSelectedSound] = useState<Sound | null>(null); // Som selecionado
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState<boolean | null>(null);
  const [cannotHear, setCannotHear] = useState<boolean>(false); // Estado para saber se o usuário não consegue ouvir
  const [audioHeard, setAudioHeard] = useState<boolean>(false); // Estado para saber se o usuário escutou o áudio
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { micQuality, audioUrl, imei, brand, model, capacity, accessKey } = location.state;

  useEffect(() => {
    // Seleciona um som aleatório do array quando o componente for carregado
    loadNewSound();
  }, []);

  // Função para carregar um novo som e suas alternativas
  const loadNewSound = () => {
    const shuffledSounds = [...sounds].sort(() => 0.5 - Math.random());
    const soundToPlay = shuffledSounds[0]; // Pega o primeiro som aleatório
    setSelectedSound(soundToPlay); // Define o som a ser tocado
    setAudioHeard(false); // Reseta o estado de "Áudio escutado"
  };

  // Função para verificar a resposta do usuário
  const handleOptionClick = (option: string) => {
    const isCorrect = option === selectedSound?.correctAnswer;
    setResult(isCorrect); // Define se a resposta está correta ou não
    if (isCorrect) {
      setAudioHeard(true); // Se acertou, significa que o áudio foi escutado
    }
  };

  // Função para reiniciar o teste
  const restartTest = () => {
    // Para o áudio e reinicia a posição
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reposiciona o áudio para o início
    }

    // Resetando os estados
    setSelectedOption(null);
    setResult(null);
    setCannotHear(false); // Reseta o estado de "Não consigo ouvir"
    setAudioHeard(false); // Reseta o estado de "Áudio escutado"

    // Carregar um novo som e suas alternativas
    loadNewSound();

    // Recarregar a página para reiniciar todo o fluxo, trocando o áudio
    window.location.reload(); // Isso recarrega a página, reiniciando o fluxo
  };

  // Função para avançar para a próxima página
  const goToNextPage = () => {
    // Passa o resultado do teste de áudio e o estado "Áudio escutado" para a próxima tela
    navigate('/scratch', { 
      state: { 
        micQuality, 
        audioUrl, 
        imei, 
        brand, 
        model, 
        capacity, 
        accessKey, 
        audioTestResult: result,
        audioHeard // Passando a informação sobre o áudio
      } 
    });
  };

  return (
    <Container>
      <Title>Testar Áudio</Title>

      {/* Componente de áudio */}
      {selectedSound && (
        <audio ref={audioRef} controls>
          <source src={selectedSound.audio} type="audio/mp3" />
          Seu navegador não suporta o elemento audio.
        </audio>
      )}

      

      {/* Opções para o usuário escolher */}
      {!cannotHear && result === null && (
        <>
        {/* Instrução para o usuário */}
        <Subtitle>Clique na opção que você ouviu:</Subtitle>
        <CardContainer>
          {selectedSound?.options.map((option) => (
            <Card
              key={option}
              onClick={() => handleOptionClick(option)}
              selected={selectedOption === option}
            >
              {option}
            </Card>
          ))}
        </CardContainer>
        </>
      )}

      {/* Exibe o resultado após a escolha */}
      {result !== null && !cannotHear && (
        <Result isCorrect={result}>
          {result ? "Você acertou o som!" : "Resposta errada. Tente novamente!"}
        </Result>
      )}

      {/* Opção de "Não consigo ouvir" */}
      {!cannotHear && result === null && (
        <ButtonSecondary onClick={() => setCannotHear(true)}>Não consigo ouvir</ButtonSecondary>
      )}

      {/* Se o usuário não consegue ouvir, mostra os botões de refazer ou avançar */}
      {cannotHear && (
        <ButtonsActionsFinally>
          <Button onClick={goToNextPage}>Próxima Página</Button>
          <ButtonSecondary onClick={restartTest}>Refazer Teste</ButtonSecondary>
        </ButtonsActionsFinally>
      )}

      {/* Botões de ações após a resposta */}
      {result !== null && !cannotHear && (
        <ButtonsActionsFinally>
          <Button onClick={goToNextPage}>Próxima Página</Button>
          <ButtonSecondary onClick={restartTest}>Refazer Teste</ButtonSecondary>
        </ButtonsActionsFinally>
      )}
    </Container>
  );
};

export default AudioOutput;
