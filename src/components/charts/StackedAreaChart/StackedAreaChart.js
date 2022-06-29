import React from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts';

const StackedAreaChart = (props) => {
    const { data, xAxisKey, areaKey1, areaKey2, aspect } = props
    console.log(data)
    return (
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
            <AreaChart width={500} height={300} data={data}
                margin={{
                    top: 5,
                    right: 30,
                    bottom: 5,
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
                <XAxis dataKey={xAxisKey} />
                <YAxis />
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <Tooltip />
                <Area type="monotone" dataKey={areaKey1} stroke="#A71D31" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey={areaKey2} stroke="#32de84" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default StackedAreaChart