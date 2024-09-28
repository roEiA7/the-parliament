import styled from "styled-components";

export const StyledMainPageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #e6eff2ee;
  overflow-y: auto;
  padding-bottom: 90px;

  .header{
    margin-bottom: auto;
    height: 70px;
    width: 100dvw;
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 8px; */
    background-color: white;
    font-size: 2.2em;
    letter-spacing: 10px;
    position: sticky;
    top: 0;
    z-index: 9999;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;
