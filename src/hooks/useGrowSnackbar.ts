import React from "react";
import { Fade } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const useGrowSnackBar = () => {
    const [state, setState] = React.useState<{
        open: boolean;
        Transition: React.ComponentType<
            TransitionProps & {
                children: React.ReactElement<any, any>;
            }
        >;
    }>({
        open: false,
        Transition: Fade,
    });

    const handleClick =
        (
            Transition: React.ComponentType<
                TransitionProps & {
                    children: React.ReactElement<any, any>;
                }
            >,
        ) =>
            () => {
                setState({
                    open: true,
                    Transition,
                });
            };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    return { handleClick, handleClose, state };

}

export default useGrowSnackBar;

