import { useNavigate } from 'react-router-dom';
import { Button, Container, Title } from './style';

const Welcome = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    const accessKey = Math.random().toString(36).substring(7).toUpperCase();
    navigate('/imei', { state: { accessKey } });
  };

  return (
    <Container>
      <Title>Bem-vindo ao Seguro Celular</Title>
      <Button onClick={handleStart}>Iniciar</Button>
    </Container>
  );
};

export default Welcome;
