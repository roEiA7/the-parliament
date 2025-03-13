import { UserAvatar } from "../enums/UserAvatar"
import { IUser } from "../interfaces/user.interface"

const getUserImgSrc = (user: IUser = {}) => {
    return user.avatar === UserAvatar.Default ? (user.photoURL || '') : `/avatars/${user.avatar}.png`
}

export default getUserImgSrc