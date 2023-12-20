import React from 'react';
import { StyledToggleContainer } from './StyledToggleContainer.styled';

interface IToggleProps {
    onToggle: () => void;
    text: { off: string; on: string; }
    className?: string;
}

const Toggle = ({
    onToggle,
    text,
    className
}: IToggleProps) => {
    return <StyledToggleContainer className={className}>
        <input id="cb5" className="tgl tgl-flip" type="checkbox" onChange={onToggle} />
        <label className="tgl-btn" data-tg-off={text.off} data-tg-on={text.on} htmlFor="cb5"></label>
    </StyledToggleContainer>
};

export default Toggle;