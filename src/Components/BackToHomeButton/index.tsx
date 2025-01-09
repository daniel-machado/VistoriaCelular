import { ButtonWithIcon } from "./styles";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackToHomeButton = () => {
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/") // Redireciona para a tela inicial
  };

  return (
    <ButtonWithIcon onClick={handleNavigateHome}>
      <FaChevronLeft />
      Voltar para a tela inicial
    </ButtonWithIcon>
  );
};

export default BackToHomeButton;
