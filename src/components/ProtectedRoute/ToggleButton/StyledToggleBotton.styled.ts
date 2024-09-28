import styled from "@emotion/styled";

export const StyledToggleButton = styled.div`
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  top: 50%;
  width: 130px;
  height: 56px;
  margin: -20px auto 0 auto;
  overflow: hidden;
  -webkit-tap-highlight-color: rgba(209, 255, 206, 0.5);
}

.button.r,
.button.r .layer {
  border-radius: 100px;
}

.button.b2 {
  border-radius: 2px;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: #eefceb;
  transition: 0.4s ease all;
  z-index: 1;
}


/* Button 3 */
#button-3 .knobs:before {
  content: "כן";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 40px;
  height: 30px;
  color: #fff;
  font-size: 26px;
  /* font-weight: bold; */
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #2e7d32;
  border-radius: 50%;
  transition: 0.4s ease all, left 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

#button-3 .checkbox:active + .knobs:before {
  width: 46px;
  border-radius: 100px;
}

#button-3 .checkbox:checked:active + .knobs:before {
  margin-left: -26px;
}

#button-3 .checkbox:checked + .knobs:before {
  content: "לא";
  left: 76px;
  background-color: #f44336;
}

#button-3 .checkbox:checked ~ .layer {
  background-color: #fcebeb;
}

`