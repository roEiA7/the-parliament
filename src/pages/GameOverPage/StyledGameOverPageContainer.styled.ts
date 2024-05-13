import styled from "styled-components";

interface IStyledGameOverPageContaienrProps {
}

export const StyledGameOverPageContaienr = styled.div<IStyledGameOverPageContaienrProps>`
.modal-container {
  position: fixed;
  display: table;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 5;

  &.hide {
    animation: quickScaleDown 0s 0.5s linear forwards;

    .modal-background {
      animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

      .modal {
        animation: scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }
  }

  &.active {
    transform: scale(1);
  }

  .modal-background {
    display: table-cell;
    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    vertical-align: middle;
    background: rgba(0, 0, 0, 0);
    animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

    .modal {
      background: white;
      width: 500px;
      padding: 25px;
      display: inline-block;
      border-radius: 3px;
      font-weight: 300;
      position: relative;
      opacity: 0;
      animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

      @media only screen and (max-width: 1000px) {
        padding: 16px;
      }

      @media only screen and (max-width: 600px) {
        width: 70dvw;
      }

      img {
        height: 250px;
        border-radius: 8px;

        @media only screen and (max-width: 1000px) {
          height: 150px;
        }
      }
    }
  }
}

@keyframes fadeIn {
  0% {
    background: rgba(0, 0, 0, 0);
  }
  100% {
    background: rgba(0, 0, 0, 0.7);
  }
}

@keyframes fadeOut {
  0% {
    background: rgba(0, 0, 0, 0.7);
  }
  100% {
    background: rgba(0, 0, 0, 0);
  }
}

@keyframes scaleUp {
  0% {
    transform: scale(0.8) translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0px);
    opacity: 1;
  }
}

@keyframes scaleDown {
  0% {
    transform: scale(1) translateY(0px);
    opacity: 1;
  }
  100% {
    transform: scale(0.8) translateY(1000px);
    opacity: 0;
  }
}

@keyframes quickScaleDown {
  0% {
    transform: scale(1);
  }
  99.9% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
`
