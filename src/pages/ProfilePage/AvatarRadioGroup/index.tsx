import { CheckCircleRounded } from "@mui/icons-material"
import { Radio, radioClasses, RadioGroup, Sheet } from "@mui/joy"
import { UserAvatar } from "../../../enums/UserAvatar";

interface IAvatarRadioGroupProps {
    photoURL: string;
    avatar: UserAvatar;
    setAvatar: React.Dispatch<React.SetStateAction<UserAvatar>>;
}

const avatars = Object.values(UserAvatar);

const AvatarRadioGroup = ({ photoURL, avatar, setAvatar }: IAvatarRadioGroupProps) => {

    return <RadioGroup
        aria-label="platform"
        overlay
        name="platform"
        value={avatar}
        onChange={(event) => setAvatar(event.target.value as UserAvatar)}
        sx={{
            flexDirection: 'row',
            gap: 1,
            flexWrap: 'wrap',
            justifyContent: 'center',
            // margin: '32px 0',
            [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.action}`]: {
                    inset: -1,
                    border: '3px solid',
                    borderColor: 'primary.500',
                },
            },
            [`& .${radioClasses.radio}`]: {
                display: 'contents',
                '& > svg': {
                    zIndex: 2,
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    bgcolor: 'background.surface',
                    borderRadius: '50%',
                },
            },
        }}
    >
        {avatars.map((value) => {
            const src = value === UserAvatar.Default ? photoURL : `/avatars/${value}.png`;
            return (
                <Sheet
                    key={value}
                    variant="outlined"
                    sx={{
                        borderRadius: 'md',
                        boxShadow: 'sm',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        p: 0.8,
                        paddingTop: 0,
                    }}
                >
                    <Radio id={value} value={value} checkedIcon={<CheckCircleRounded />} />
                    <img src={src} height={64} width={64} />
                </Sheet>
            )
        }
        )}
    </RadioGroup>
}

export default AvatarRadioGroup;