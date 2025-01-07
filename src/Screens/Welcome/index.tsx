import { useNavigate } from 'react-router-dom';
import { Button, Container, Subtitle, Title } from './style';

const Welcome = () => {
  const navigate = useNavigate();
  const accessKey = Math.random().toString(36).substring(7).toUpperCase();

  const handleStart = () => {
    navigate('/imei', { state: { accessKey } });
  };

  return (
    <Container>
      <Title>Bem-vindo à Vistoria de Seguro Celular</Title>
      <Subtitle>Chave de acesso: {accessKey}</Subtitle>
      <Button onClick={handleStart}>Iniciar</Button>
    </Container>
  );
};

export default Welcome;
