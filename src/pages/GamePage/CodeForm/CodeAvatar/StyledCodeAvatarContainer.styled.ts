import styled from "styled-components";

interface IStyledCodeAvatarContainerProps {
  codeLength: number;
}

export const StyledCodeAvatarContainer = styled.div<IStyledCodeAvatarContainerProps>`
  .rating {
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: hidden;
    flex-direction: row-reverse;
    height: 150px;
    position: relative;
  }

  .rating-0 {
    filter: grayscale(100%);
  }

  .rating > input {
    display: none;
  }

  .rating > label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: auto;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: 0.3s;
  }

  .rating > input:checked ~ label,
  .rating > input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }

  .rating > input:not(:checked) ~ label:hover,
  .rating > input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }

  .emoji-wrapper {
    width: 100%;
    text-align: center;
    height: 100px;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
  }

  .emoji-wrapper > .emoji {
    transform: translateY(-${({ codeLength }) => (codeLength - 1) * 100}px);
  }

  .emoji-wrapper:before,
  .emoji-wrapper:after {
    content: "";
    height: 15px;
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 1;
  }

  .emoji-wrapper:before {
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 35%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .emoji-wrapper:after {
    bottom: 0;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 35%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .emoji {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
  }

  .emoji > svg {
    margin: 15px 0;
    width: 70px;
    height: 70px;
    flex-shrink: 0;
  }

  #rating-1:checked ~ .emoji-wrapper > .emoji {
    transform: translateY(-100px);
  }
  #rating-2:checked ~ .emoji-wrapper > .emoji {
    transform: translateY(-200px);
  }
  #rating-3:checked ~ .emoji-wrapper > .emoji {
    transform: translateY(-300px);
  }
  #rating-4:checked ~ .emoji-wrapper > .emoji {
    transform: translateY(-400px);
  }
  #rating-5:checked ~ .emoji-wrapper > .emoji {
    transform: translateY(-500px);
  }
`;
