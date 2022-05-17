import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StackedAreaChart = (props) => {
    const { data, xAxisKey, areaKey1, areaKey2 } = props
    return (
        <ResponsiveContainer width="99%" aspect={1.5}>
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
                <Line type="monotone" dataKey={areaKey1} stroke="#FF0000" strokeDasharray="5 5" />
                <Line type="monotone" dataKey={areaKey2} stroke="#4e91fd" strokeDasharray="3 4 5 2" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default StackedAreaChart