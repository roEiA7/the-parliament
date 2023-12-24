import React, { ReactNode, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';



interface IActionsMenuProps {
    children: ReactNode;
}

const ActionsMenu = ({ children }: IActionsMenuProps) => {
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{
                position: 'fixed', bottom: 9, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', paddingX: 4,
                background: 'linear-gradient(to right, #f9857f, white 70%, white 70%, #73a8d6)',
            }}
        >
            {children}
        </BottomNavigation>
    )
}

export default ActionsMenu