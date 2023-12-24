import styled from "styled-components";

interface IStyledToggleContainerProps {
	width: string;
	height: string;
}

export const StyledToggleContainer = styled.div<IStyledToggleContainerProps>`
.tgl {
	display: none;
  
	// add default box-sizing for this scope
	&,
  &:after,
  &:before,
	& *,
  & *:after,
  & *:before,
	& + .tgl-btn {
		box-sizing: border-box;
		&::selection {
			background: none;
		}
	}
  
	+ .tgl-btn {
		outline: 0;
		display: block;
		width: ${({ width }) => width};
		height: ${({ height }) => height};
		position: relative;
		cursor: pointer;
    user-select: none;
		&:after,
    &:before {
			position: relative;
			display: block;
			content: "";
			width: 50%;
			height: 100%;
		}
    
		&:after {
			left: 0;
		}
    
		&:before {
			display: none;
		}
	}
  
	&:checked + .tgl-btn:after {
		left: 50%;
	}
}

.tgl-flip {
	+ .tgl-btn {
		padding: 2px;
		transition: all .2s ease;
		perspective: 200px;

		&:hover{
			filter: brightness(0.95);
		}
		&:after,
    &:before {
			display: grid;
			place-content: center;
			transition: all .4s ease;
			width: 100%;
			text-align: center;
			position: absolute;
			line-height: 2em;
			color: #fff;
			position: absolute;
			top: 0;
			left: 0;
			backface-visibility: hidden;
			border-radius: 4px;
			font-size: 0.875rem;
			font-weight: 500;
		}
    
		&:after {
			content: attr(data-tg-on);
			background: #02C66F;
			transform: rotateY(-180deg);
		}
    
		&:before {
			background: #7FC6A6;
			content: attr(data-tg-off);
		}

		&:active:before {
      transform: rotateY(-20deg);
		}
	}
  
	&:checked + .tgl-btn {
    &:before {
      transform: rotateY(180deg);
    }
    
    &:after {
      transform: rotateY(0);
      left: 0;
      background: #B33A3A;
    }
    
    &:active:after {
      transform: rotateY(20deg);
    }
	}
}
`