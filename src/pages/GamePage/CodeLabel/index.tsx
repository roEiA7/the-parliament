import { useGameContext } from "../../../context/GameStateProvider"
import { StyledCodeLabelContainer } from "./StyledCodeLabelContainer.styled";

const CodeLabel = () => {
    const { code } = useGameContext();
    const { codeName, codeLength } = code || {};

    return <StyledCodeLabelContainer>
        <span>{codeName} | {codeLength}</span>
    </StyledCodeLabelContainer>
}

export default CodeLabel;