import React, { PureComponent } from 'react';
import moment from 'moment';
import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import _ from 'lodash';
import { Grid, Typography } from '@mui/material';

const dateFormatter = date => {
    return moment(date).format('DD/MM/YY');
};

class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor='end' fill='#FFFF' transform='rotate(-35)'>
                    {dateFormatter(payload.value)}
                </text>
            </g>
        );
    }
}

const CustomTooltip = (props) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
        return (
            <Grid container direction='column' spacing={1}>
                {payload.map((p) => (
                    <Grid item>
                        <Typography variant='body1'>
                            {`${p.payload.DeviceSensorName} : ${p.value}`}
                        </Typography>
                    </Grid>
                ))
                }
            </Grid>
        )
    }

    return null;
};

// const CustomizedTooltip = () => {
//     const { x, y, payload } = this.props;

//     return (
//         <g transform={`translate(${x},${y})`}>
//             <text x={0} y={0} dy={16} textAnchor='end' fill='#FFFF' transform='rotate(-35)'>
//                 {dateFormatter(payload.value)}
//             </text>
//         </g>
//     );
// }

const LineChart = ({ data, aspect }) => {

    return (
        <>
            {data && (
                <ResponsiveContainer width='100%'
                    height='100%'
                    aspect={aspect}>
                    <ReLineChart
                        margin={{
                            top: 20,
                            right: 40
                        }}
                    >
                        <XAxis dataKey='RecordedOn' height={60} tick={<CustomizedAxisTick />}
                            angle={10} textAnchor='start' stroke='#FFFFFF' allowDuplicatedCategory={false} />
                        <YAxis dataKey='Value' stroke='#FFFFFF' />
                        <Tooltip content={<CustomTooltip />} />
                        {/* <Legend /> */}
                        {data.map((d) => (
                            <Line type='monotone' dataKey='Value' data={d.data} key={d.DeviceSensorRecId}
                                stroke='#E97878' dot={false} />
                        ))}
                    </ReLineChart>
                </ResponsiveContainer>
            )}
        </>
    )
}

export { LineChart };