
import React, { useRef, useState, MouseEvent, ChangeEvent } from 'react';
import { LoadingButton } from '@mui/lab';
import { Button, Slider, TextField, FormGroup, FormControlLabel } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { StyledCodeFormContainer } from './StyledCodeFormContainer.styled';
import classNames from 'classnames';
import CodeAvatar from './CodeAvatar';
import { useGameContext } from '../../../context/GameStateProvider';

interface ICodeFormParams {
    width: string;
    height: string;
    disabled: boolean;
}

const CodeForm = ({ width, height, disabled }: ICodeFormParams) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [shouldDispayForm, setShouldDispayForm] = useState<Boolean | undefined>(undefined);
    const [codeLength, setCodeLength] = useState(1);
    const [codeName, setCodeName] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const isCodeInvalid = !Boolean(codeName);
    const { handleCodeSubmit } = useGameContext();

    const toggleDisplayForm = () => {
        setShouldDispayForm(prevState => !prevState);
    };

    const hideDisplayForm = (event: MouseEvent) => {
        if (modalRef?.current && !modalRef.current.contains(event.target as Node)) {
            toggleDisplayForm();
        }
    }

    const maxLength = 9; // todo: get from state
    const marks = Array.from(Array(maxLength).keys()).map(i => ({ value: i + 1, label: i + 1 }));
    const onCodeLengthChange = (event: Event, value: number | number[]) => {
        setCodeLength(Array.isArray(value) ? value[0] : value);
    }

    const onCodeNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCodeName(event.target.value);
    }

    const handleSubmitClick = () => { handleCodeSubmit({ codeName, codeLength, foundCards: 0 }); toggleDisplayForm(); }

    return (
        <StyledCodeFormContainer>
            <div onClick={hideDisplayForm} className={classNames('modal-container', { hide: !shouldDispayForm, active: shouldDispayForm !== undefined })}>
                <div className="modal-background">
                    <div ref={modalRef} className="modal" dir='rtl'>
                        <FormGroup placeholder='test' sx={{ gap: 4 }}>
                            <CodeAvatar codeLength={codeLength} />
                            <FormControlLabel
                                control={<Slider
                                    aria-label="Custom marks"
                                    defaultValue={1}
                                    step={1}
                                    valueLabelDisplay="auto"
                                    min={1}
                                    max={maxLength}
                                    marks={marks}
                                    onChange={onCodeLengthChange}
                                />}
                                label="כמה מילים?"
                                labelPlacement='top'
                            />

                            <TextField value={codeName} onChange={onCodeNameChange} label="מה הקוד?" variant="outlined" />
                            <LoadingButton
                                size="small"
                                onClick={handleSubmitClick}
                                loading={isLoading}
                                loadingPosition="center"
                                endIcon={<RocketLaunchIcon />}
                                variant="contained"
                                disabled={isCodeInvalid}
                            >
                                <span>שא-גר</span>
                            </LoadingButton>
                        </FormGroup>
                    </div>
                </div>
            </div>
            <Button variant="text" onClick={toggleDisplayForm} disabled={disabled} sx={{ height, width }}>
                תן קוד
            </Button>
        </StyledCodeFormContainer >
    );
};

export default CodeForm;