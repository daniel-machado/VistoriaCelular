import BackToHomeButton from "../../Components/BackToHomeButton";
import { Container, Title, Subtitle } from "./styles"

const Page404 = () => {

  return (
    <Container>
      <Title>Oops!</Title>
      <Subtitle>Infelizmente a página que você tentou acessar não existe.</Subtitle>
      <BackToHomeButton />
    </Container>
  );
};

export default Page404;
