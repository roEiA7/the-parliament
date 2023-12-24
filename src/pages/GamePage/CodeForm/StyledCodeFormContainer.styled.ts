import styled from "styled-components";

export const StyledCodeFormContainer = styled.div`
.modal-container {
  position: fixed;
  display: table;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 5;
  /* transform: scale(1); */

  &.hide {
    animation: quickScaleDown 0s .5s linear forwards;

    .modal-background {
      animation: fadeOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

      .modal {
        animation: scaleDown .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
  }

  &.active{
    transform: scale(1);
  }
  
  .modal-background {
    display: table-cell;
    background: rgba(0, 0, 0, .8);
    text-align: center;
    vertical-align: middle;
    background: rgba(0, 0, 0, .0);
    animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

    .modal {
      background: white;
      width: 35vw;
      padding: 50px;
      display: inline-block;
      border-radius: 3px;
      font-weight: 300;
      position: relative;
      opacity: 0;
      animation: scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    }
  }
}

@keyframes fadeIn {
  0% {
    background:rgba(0,0,0,.0);
  }
  100% {
    background:rgba(0,0,0,.7);
  }
}

@keyframes fadeOut {
  0% {
    background:rgba(0,0,0,.7);
  }
  100% {
    background:rgba(0,0,0,.0);
  }
}

@keyframes scaleUp {
  0% {
    transform:scale(.8) translateY(1000px);
    opacity:0;
  }
  100% {
    transform:scale(1) translateY(0px);
    opacity:1;
  }
}

@keyframes scaleDown {
  0% {
    transform:scale(1) translateY(0px);
    opacity:1;
  }
  100% {
    transform:scale(.8) translateY(1000px);
    opacity:0;
  }
}

@keyframes quickScaleDown {
  0% {
    transform:scale(1);
  }
  99.9% {
    transform:scale(1);
  }
  100% {
    transform:scale(0);
  }
}
`