import { StyledToggleButton } from "./StyledToggleBotton.styled";

const ToggleButton = () => {
    return <StyledToggleButton>
        <div className="button r" id="button-3">
            <input type="checkbox" className="checkbox" />
            <div className="knobs"></div>
            <div className="layer"></div>
        </div>
    </StyledToggleButton>
}

export default ToggleButton;