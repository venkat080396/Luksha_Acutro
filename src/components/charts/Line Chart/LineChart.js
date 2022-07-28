import React, { PureComponent } from 'react';
import moment from 'moment';
import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const response = [
    {
        name: 'Sensor 1',
        stroke: "#A71D31",
        data: [
            { "RecordedOn": "2022/04/03 10:00:00", "Value": "20.622" },
            { "RecordedOn": "2022/04/05 10:00:00", "Value": "30.193" },
            { "RecordedOn": "2022/04/07 10:00:00", "Value": "40.602" },
            { "RecordedOn": "2022/04/08 10:00:00", "Value": "50.602" },
            { "RecordedOn": "2022/04/10 10:00:00", "Value": "60.602" },
            { "RecordedOn": "2022/04/12 10:00:00", "Value": "70.602" },
            { "RecordedOn": "2022/04/14 10:00:00", "Value": "80.602" },
            { "RecordedOn": "2022/04/16 10:00:00", "Value": "90.602" },
        ]
    },
    {
        name: 'Sensor 2',
        stroke: "#82ca9d",
        data: [
            { "RecordedOn": "2022/04/03 10:00:00", "Value": "10.622" },
            { "RecordedOn": "2022/04/07 10:00:00", "Value": "35.193" },
            { "RecordedOn": "2022/04/09 10:00:00", "Value": "60.602" },
            { "RecordedOn": "2022/04/10 10:00:00", "Value": "10.602" },
            { "RecordedOn": "2022/04/17 10:00:00", "Value": "50.602" },
            { "RecordedOn": "2022/04/19 10:00:00", "Value": "20.602" },
            { "RecordedOn": "2022/04/23 10:00:00", "Value": "30.602" },
            { "RecordedOn": "2022/04/25 10:00:00", "Value": "60.602" },
            { "RecordedOn": "2022/04/26 10:00:00", "Value": "70.602" },
            { "RecordedOn": "2022/04/27 10:00:00", "Value": "80.602" },
            { "RecordedOn": "2022/04/28 10:00:00", "Value": "90.602" },
            { "RecordedOn": "2022/04/29 10:00:00", "Value": "100.602" },
        ]
    }
]

const dateFormatter = date => {
    // return moment(date).unix();
    return moment(date).format('DD/MM/YY');
};

class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#FFFF" transform="rotate(-35)">
                    {dateFormatter(payload.value)}
                </text>
            </g>
        );
    }
}

const LineChart = ({ data, aspect }) => {

    return (
        <>
            {data && (
                <ResponsiveContainer width="100%"
                    height="100%"
                    aspect={aspect}>
                    <ReLineChart
                        margin={{
                            top: 20,
                            right: 40
                        }}
                    >
                        <XAxis dataKey="RecordedOn" height={60} tick={<CustomizedAxisTick />}
                            angle={10} textAnchor="start" stroke="#FFFFFF" allowDuplicatedCategory={false} />
                        <YAxis dataKey="Value" stroke="#FFFFFF" />
                        <Tooltip />
                        {/* <Legend /> */}
                        {data.map((d) => (
                            <Line type="monotone" dataKey="Value" data={d.data} key={d.DeviceSensorRecId}
                                stroke="#E97878" dot={false} />
                        ))}
                    </ReLineChart>
                </ResponsiveContainer>
            )}
        </>
    )
}

export default LineChart