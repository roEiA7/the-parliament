import { Avatar } from "@mui/material";
import { IUser } from "../../interfaces/user.interface";
import getUserImgSrc from "../../utils/getUserImgSrc";

const ProfileAvatar = ({ user, ...other }: { user: IUser, [other: string]: unknown }) => {
    const src = getUserImgSrc(user);
    return src ?
        (<Avatar alt={user.displayName || 'Avatar'} src={src} {...other} />)
        : (<Avatar sx={{ backgroundColor: 'beige' }} {...other}>{user.displayName?.[0] || 'A'}</Avatar>);
}

export default ProfileAvatar;