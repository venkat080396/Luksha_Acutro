import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StackedAreaChart = (props) => {
    const { data, xAxisKey, areaKey1, areaKey2, aspect } = props
    return (
        <ResponsiveContainer aspect={aspect}>
            <LineChart
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
            </LineChart>
        </ResponsiveContainer>
    )
}

export default StackedAreaChart