import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const ResultChart = () => {
    const data = [
        { option: 'option 1', value: 'https://i.ibb.co/HP6gsnR/614-Nlzq-VFYL-AC-SL1410.jpg', votes: 10 },
        { option: 'option 2', value: 'Green', votes: 25 },
        { option: 'option 3', value: 'Blue', votes: 15 },
        { option: 'option 4', value: 'Black', votes: 30 },
    ];

    const COLORS = ['#8884d8', '#82ca9d', '#8dd1e1', '#ffc658'];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { option, value, votes } = payload[0].payload;
            return (
                <div className="p-2 bg-white custom-tooltip">
                    {value.startsWith('http') ?
                        <img src={value}
                            style={{ height: '50px', width: '50px', objectFit: 'cover', borderRadius: '50%' }}
                            className='border-4'
                            alt={option} height="50" />
                        : <p>{value}</p>}
                    <p><strong>{option}</strong></p>
                    <p><span>{`Votes: ${votes}`}</span></p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='my-5 text-center'>
                <p className='block text-3xl font-bold text-green-400'>Poll Results : </p>
                <span style={{ color: 'rgb(255,255,255,30%)' }}>( hover or click to show the details )</span>
            </div>
            <PieChart width={400} height={300}>
                <Pie
                    data={data}
                    dataKey="votes"
                    nameKey="option"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                        const RADIAN = Math.PI / 180;
                        const radius = 25 + innerRadius + (outerRadius - innerRadius);
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                            <text x={x} y={y} fill="#8884d8" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                                {data[index].option}
                            </text>
                        );
                    }}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}>
                        </Cell>
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </div>
    );
};

export default ResultChart;
