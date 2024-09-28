import { Avatar } from "@mui/material";
import { IUser } from "../../interfaces/user.interface";

const ProfileAvatar = ({ user, ...other }: { user: IUser, [other: string]: unknown }) => {
    return user.photoURL ?
        (<Avatar alt={user.displayName || 'Avatar'} src={user.photoURL} {...other} />)
        : (<Avatar sx={{ backgroundColor: 'beige' }} {...other}>{user.displayName?.[0] || 'A'}</Avatar>);
}

export default ProfileAvatar;