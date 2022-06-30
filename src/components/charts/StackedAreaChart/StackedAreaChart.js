import React from 'react';
import moment from 'moment';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';


const dateFormatter = date => {
    // return moment(date).unix();
    return moment(date).format('DD/MM/YY');
};

const StackedAreaChart = (props) => {
    const { data, areaKey1, areaKey2, aspect, width, height } = props

    return (
        <>
            {data && (
                <ResponsiveContainer aspect={aspect}>
                    {/* <LineChart
                data={data}
                width={500}
                height={300}
                margin={{
                    top: 5,
                    right: 30,
                    bottom: 5,
                }}
            >
                <XAxis stroke="rgba(255,255,255,0.3)" dataKey={xAxisKey} />
                <YAxis stroke="rgba(255,255,255,0.3)" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={areaKey1} stroke="#FF0000" />
                <Line type="monotone" dataKey={areaKey2} stroke="#4e91fd" />
            </LineChart> */}
                    <AreaChart width={width} height={900} data={data}
                        margin={{
                            top: 5,
                            right: 40
                        }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#A71D31" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#32de84" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis tickFormatter={dateFormatter} dataKey="RecordedOn" angle={10} textAnchor="start" />
                        <YAxis />
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <Tooltip />
                        <Area type="monotone" dataKey={areaKey1} stroke="#A71D31" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey={areaKey2} stroke="#32de84" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            )}
        </>
    )
}

export default StackedAreaChart