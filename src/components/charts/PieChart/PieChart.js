import React, { useState } from "react";
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
const PieChartComponent = (props) => {
    const { data, piekey } = props

    const COLORS = ['#A71D31', '#32de84', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            {data && (
                <ResponsiveContainer width={600} height={350} className="text-center">
                    <PieChart width={600} height={350}>
                        <Legend layout="horizontal" verticalAlign="bottom" align="top" />
                        <Pie
                            data={data}
                            cx="50%"
                            //cy="20%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={120}
                            dataKey={piekey}

                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip></Tooltip>
                    </PieChart>
                </ResponsiveContainer>
            )}
        </>
    )
}
export default PieChartComponent;