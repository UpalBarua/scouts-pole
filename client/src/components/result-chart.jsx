import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import Button from './ui/button';

const ResultChart = ({ pollId, handleVoteAgain }) => {
  const [pollData, setPollData] = useState([]) || [];
  useEffect(() => {
    axios
      .get(`/polls/${pollId}`)
      .then((response) => {
        setPollData(response.data.options);
      })
      .catch((error) => {
        console.error('Error fetching poll data:', error);
      });
  }, [pollId]);

  const data = pollData.map((optionData) => ({
    name: optionData.option,
    image: optionData.optionImage,
    value: optionData.votes.length,
    // value: optionData.votes.length > 0 ? optionData.votes.length : 1  //uncomment this if need to arrange the cell and comment the previous line
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const isSmallScreen = window.innerWidth <= 768;

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radiusMultiplier = isSmallScreen ? 0.5 : 1.2;
    const radius = innerRadius + (outerRadius - innerRadius) * radiusMultiplier;

    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central">
        {!isSmallScreen && data[index].name + ' : '} {data[index].value}
        {/* {`${(percent * 100).toFixed(0)}%`} */}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const optionData = payload[0].payload;
      const { name, image, votes, value } = optionData;

      let content;
      if (typeof name === 'string') {
        content = (
          <div className="p-2 text-black bg-white">
            {image && <img src={image} alt="Option" width="100" height="100" />}
            {image ? (
              <p>
                <strong>Name:</strong> {name}
              </p>
            ) : (
              <p>{name}</p>
            )}
            <p>Votes: {value}</p>
            <p>Popularity: {`${(value / 100).toFixed(2)}%`}</p>
          </div>
        );
      }

      return <div className="custom-tooltip">{content}</div>;
    }

    return null;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="flex flex-col items-center text-2xl font-bold text-emerald-500">
        Poll results :
        <span className="text-sm font-normal text-gray-500">
          {' '}
          click or hover to see more
        </span>
      </h2>

      <div className="overflow-auto chart-container">
        <PieChart width={isSmallScreen ? 300 : 400} height={300}>
          <Pie
            data={data}
            cx={isSmallScreen ? '50%' : '50%'}
            cy={isSmallScreen ? '50%' : '50%'}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            cursor="pointer">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                // fill='#272730' // uncomment if donot want to show color variant
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </div>
      {/* <button
        variant="primary"
        onClick={() => handleVoteAgain(true)}
        className="px-4 py-2 my-2 text-white bg-blue-500 rounded hover:bg-blue-700">
        Vote again
      </button> */}
    </div>
  );
};

export default ResultChart;
