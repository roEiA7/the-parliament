import React, {
  useRef,
  useState,
  MouseEvent,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Slider,
  TextField,
  FormGroup,
  FormControlLabel,
  ButtonProps,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { StyledCodeFormContainer } from "./StyledCodeFormContainer.styled";
import classNames from "classnames";
import CodeAvatar from "./CodeAvatar";
import { useGameContext } from "../../../context/GameStateProvider";
import { useRoomContext } from "../../../context/RoomProvider";
import { TeamColor } from "../../../enums/TeamColor";
import { CardColor } from "../../../enums/CardColor";

interface ICodeFormParams {
  disabled: boolean;
  color: ButtonProps["color"];
}

const CodeForm = ({ disabled, color }: ICodeFormParams) => {
  const modalRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [shouldDispayForm, setShouldDispayForm] = useState<Boolean | undefined>(
    undefined
  );
  const [codeLength, setCodeLength] = useState(1);
  const [codeName, setCodeName] = useState<string>("");
  const isCodeInvalid = !Boolean(codeName);
  const { handleCodeSubmit, turn } = useGameContext();
  const isCodeError = codeName.split(" ").length > 1;

  useEffect(() => {
    if (disabled && shouldDispayForm) {
      setShouldDispayForm(false);
      inputRef.current?.blur();
    }
  }, [disabled, shouldDispayForm]);

  useEffect(() => {
    if (!disabled) {
      setShouldDispayForm(true);
    }
  }, [disabled]);

  const toggleDisplayForm = () => {
    setShouldDispayForm((prevState) => !prevState);
  };

  const hideDisplayForm = (event: MouseEvent) => {
    if (modalRef?.current && !modalRef.current.contains(event.target as Node)) {
      toggleDisplayForm();
    }
  };


  const { room } = useRoomContext();
  const cardsData = room?.cardsData || [];
  const teamColor = TeamColor[turn.team];
  const maxLength = cardsData.filter((card) =>
    card.color === teamColor && !card.revealed).length;
  const marks = Array.from(Array(maxLength).keys()).map((i) => ({
    value: i + 1,
    label: i + 1,
  }));
  const onCodeLengthChange = (event: Event, value: number | number[]) => {
    setCodeLength(Array.isArray(value) ? value[0] : value);
  };

  const onCodeNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCodeName(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleCodeSubmit({ codeName, codeLength, foundCards: 0 });
    toggleDisplayForm();
    setCodeName("");
  };

  return (
    <StyledCodeFormContainer>
      <div
        onClick={hideDisplayForm}
        className={classNames("modal-container", {
          hide: !shouldDispayForm,
          active: shouldDispayForm !== undefined,
        })}
      >
        <div className="modal-background">
          <form
            ref={modalRef}
            className="modal"
            dir="rtl"
            onSubmit={handleFormSubmit}
          >
            <FormGroup sx={{ gap: { xs: 1, md: 4 } }}>
              <CodeAvatar codeLength={codeLength} />
              <FormControlLabel
                control={
                  <Slider
                    aria-label="Custom marks"
                    defaultValue={1}
                    step={1}
                    valueLabelDisplay="auto"
                    min={1}
                    max={maxLength}
                    marks={marks}
                    onChange={onCodeLengthChange}
                    size="small"
                  />
                }
                label="כמה מילים?"
                labelPlacement="top"
              />

              <TextField
                value={codeName}
                error={isCodeError}
                onChange={onCodeNameChange}
                label="מה הקוד?"
                variant="outlined"
                inputRef={inputRef}
                size="small"
                helperText={isCodeError ? "מילה אחת אמציה" : null}
              />
              <LoadingButton
                size="small"
                loadingPosition="center"
                endIcon={<RocketLaunchIcon />}
                variant="contained"
                disabled={isCodeInvalid || disabled}
                type="submit"
              >
                <span>שא-גר</span>
              </LoadingButton>
            </FormGroup>
          </form>
        </div>
      </div>
      <Button
        variant="outlined"
        onClick={toggleDisplayForm}
        disabled={disabled}
        className={classNames({ attention: !disabled && !shouldDispayForm })}
        color={color}
        size="small"
        sx={{ width: "100px" }}
      >
        תן קוד
      </Button>
    </StyledCodeFormContainer>
  );
};

export default CodeForm;
