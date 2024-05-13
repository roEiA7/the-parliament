import { StyledGameOverPageContaienr } from "./StyledGameOverPageContainer.styled";
import { FormGroup } from "@mui/material";
import { useGameContext } from "../../context/GameStateProvider";
import { useRoomContext } from "../../context/RoomProvider";
import { IRoom } from "../../interfaces/room.interface";
import { ICodeState, ITurnState } from "../../interfaces/GameState.interface";
import { useEffect, useRef, useState, MouseEvent, FormEvent } from "react";
import classNames from "classnames";
import { LoadingButton } from "@mui/lab";
import RestartAltRounded from "@mui/icons-material/RestartAltRounded";
import finale from "../../assets/finale.jpg";


const GameOverPage = () => {
  const modalRef = useRef<HTMLFormElement>(null);
  const [shouldDisplayPopup, setShouldDisplayPopup] = useState<Boolean | undefined>(
    undefined
  );
  const { setTurn } = useGameContext();
  const { setRoom, room } = useRoomContext();
  const { handleCodeSubmit } = useGameContext();

  const startOver = () => {
    handleCodeSubmit({} as ICodeState);
    setRoom({} as IRoom);
    setTurn({} as ITurnState);
  };

  useEffect(() => {
    if (room?.winningTeam) {
      setShouldDisplayPopup(true);
    }
  }, [room?.winningTeam]);

  const toggleDisplayForm = () => {
    setShouldDisplayPopup((prevState) => !prevState);
  };

  const hideDisplayForm = (event: MouseEvent) => {
    if (modalRef?.current && !modalRef.current.contains(event.target as Node)) {
      toggleDisplayForm();
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    startOver();
  };

  return (
    <StyledGameOverPageContaienr>
      <div
        onClick={hideDisplayForm}
        className={classNames("modal-container", {
          hide: !shouldDisplayPopup,
          active: shouldDisplayPopup !== undefined,
        })}
      >
        <div className="modal-background">
          <form
            ref={modalRef}
            className="modal"
            dir="rtl"
            onSubmit={handleFormSubmit}
          >
            <FormGroup sx={{ gap: { xs: 2, md: 4 } }}>
              <img src={finale} />
              <LoadingButton
                size="small"
                loadingPosition="center"
                endIcon={<RestartAltRounded />}
                variant="contained"
                type="submit"
              >
                <span>תתחיל חדש</span>
              </LoadingButton>
            </FormGroup>
          </form>
        </div>
      </div>

    </StyledGameOverPageContaienr>
  );
};

export default GameOverPage;
