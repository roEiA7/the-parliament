import { Prediction } from "../enums/Prediction";
import { IPost } from "../interfaces/Post.interface";
import { IUser } from "../interfaces/user.interface";

export const mockUser: IUser = {
    displayName: 'Roei',
    id: 'Roei',
    photoURL: "https://lh3.googleusercontent.com/a/AGNmyxbQFMJ_4-iXZHFIn_ZNkPSLxKPmcWffrzRgNN5J=s96-c"
}

export const mockPost: IPost = {
    key: 'afa',
    title: 'הפסקת אש',
    // description: 'הפסקת אש עד סוף היום ?',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71PUuTXfcY6x6DwHLvk3936OqwkGuIbGW3w&s',
    bets: [
        {
            user: {},
            amount: 1000,
            prediction: Prediction.No,
            timestamp: Date.now() - 1232320
        },
        {
            user: mockUser,
            amount: 820,
            prediction: Prediction.Yes,
            timestamp: Date.now() - 500000
        },
        {
            user: { displayName: 'Y' },
            amount: 510,
            prediction: Prediction.Yes,
            timestamp: Date.now()
        },
        {
            user: mockUser,
            amount: 500,
            prediction: Prediction.No,
            timestamp: Date.now()
        },
    ],
    isOpen: true,
    odds: {
        [Prediction.Yes]: 2.5,
        [Prediction.No]: 1.2
    }
}