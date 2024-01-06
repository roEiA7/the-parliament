import { StyledComingSoonPageContainer } from "./StyledComingSoonPage.styled";
import backgroundImage from "../../assets/lobby-background.png";
import Timer from "./Timer";

const ComingSoonPage = () => {
  return (
    <StyledComingSoonPageContainer backgroundImage={backgroundImage}>
      <div className="bg" />
      <Timer />
    </StyledComingSoonPageContainer>
  );
};

export default ComingSoonPage;
