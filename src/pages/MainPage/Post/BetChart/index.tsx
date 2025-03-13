import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { IBet } from '../../../../interfaces/Bet.interface';
import { Prediction } from '../../../../enums/Prediction';
import { coin } from '../../../../constants/symbols';
import ProfileAvatar from '../../../../components/ProfileAvatar';
import { Badge } from '@mui/material';
import { timestampToDate } from '../../../../utils/time';
import { IUser } from '../../../../interfaces/user.interface';

const AvatarShape = (props: any) => {
    const { cx, cy, user, prediction } = props; // cx, cy are the coordinates of the point
    const color = prediction === Prediction.Yes ? 'success' : 'error';
    const bgColor = prediction === Prediction.Yes ? '#2e7d32' : '#d32f2f'

    return (
        <foreignObject x={cx - 20} y={cy - 20} width="30" height="40">
            <Badge color={color} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} overlap="circular" sx={{ backgroundColor: bgColor, borderRadius: '50%', padding: 0.4 }} >
                <ProfileAvatar user={user} sx={{ width: 24, height: 24, backgroundColor: 'beige', color: 'black' }} />
            </Badge>
        </foreignObject>
    );
};

const CustomTick = (props: any) => {
    const { x, y, payload } = props; // Get the X, Y positions and the tick value (payload.value)

    const date = new Date(payload.value);
    const day = `${date.getDate()}/${date.getMonth() + 1}`; // Format day and month
    const time = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`; // Format time

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
                {day}
                <tspan x="0" dy="15">{time}</tspan>
            </text>
        </g>
    );
};

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const xValue = timestampToDate(payload[0].payload.x);
        const yValue = payload[0].payload.y;
        const zValue = payload[0].payload.z;

        return (
            <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '0 12px', border: '1px solid #ccc', textAlign: 'center' }}>
                <p>{zValue}</p>
                <p>{`${yValue}${coin}`}</p>
                <p>{xValue}</p>
            </div>
        );
    }

    return null;
};

const BetChart = ({ bets, betsUsers }: { bets: IBet[], betsUsers: IUser[] }) => {

    const scatters = bets.map((bet, key) =>
        <Scatter
            name={betsUsers[key].displayName || 'אנונימי'}
            fill={bet.prediction === Prediction.Yes ? '#2e7d32' : '#d32f2f'}
            shape={<AvatarShape user={betsUsers[key]} prediction={bet.prediction} />}
            data={[{ x: bet.timestamp, y: bet.amount, z: betsUsers[key].displayName || 'אנונימי' }]}
        />
    )

    return <ResponsiveContainer width={308} height={350}>
        <ScatterChart margin={{
            top: 20,
            right: 30,
            bottom: 20,
            // left: 20,
        }}>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" tick={<CustomTick />} domain={['auto', 'auto']} />
            <YAxis type="number" dataKey="y" tickMargin={32} domain={['auto', 'auto']} />
            <ZAxis type="number" dataKey="z" />
            <Tooltip
                content={<CustomTooltip />}
                cursor={{ strokeDasharray: '3 3' }}
            />
            {/* <Legend /> */}
            {scatters}

        </ScatterChart>
    </ResponsiveContainer>
}

export default BetChart