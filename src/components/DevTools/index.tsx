import { ChangeEvent } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Team } from '../../enums/Team';
import { useAuthContext } from '../../context/AuthProvider';
import { Role } from '../../enums/Role';

const TeamRadio = Object.values(Team).map(team =>
    <FormControlLabel
        value={team}
        control={<Radio />}
        label={team}
    />
)

const RoleRadio = Object.values(Role).map(role =>
    <FormControlLabel
        value={role}
        control={<Radio />}
        label={role}
    />
)

const DevTools = () => {
    const { setUser, team: userTeam, role: userRole } = useAuthContext() || {};

    const onTeamChange = (event: ChangeEvent<HTMLInputElement>) => {
        const team = event.target.value as Team;
        if (typeof setUser === 'function') {
            setUser(prev => ({ ...prev, team }));
        }
    }

    const onRoleChnage = (event: ChangeEvent<HTMLInputElement>) => {
        const role = event.target.value as Role;
        if (typeof setUser === 'function') {
            setUser(prev => ({ ...prev, role }));
        }
    }

    return (
        <>
            <FormControl sx={{ alignItems: 'center' }}>
                <FormLabel id="demo-radio-buttons-group-label">Team</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={userTeam}
                    onChange={onTeamChange}
                    name="radio-buttons-group"
                    row
                >
                    {TeamRadio}
                </RadioGroup>
            </FormControl>
            <FormControl sx={{ alignItems: 'center' }}>
                <FormLabel id="demo-radio-buttons-group-label-role">Role</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label-role"
                    value={userRole}
                    onChange={onRoleChnage}
                    name="radio-buttons-group"
                    row
                >
                    {RoleRadio}
                </RadioGroup>
            </FormControl>
        </>



    )
}

export default DevTools;