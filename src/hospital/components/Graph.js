import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
function Graph() {
  const data = [
    {
      name: "Jan",
      frequency: 40,
    },
    {
      name: "Feb",
      frequency: 30,
    },
    {
      name: "Mar",
      frequency: 20,
    },
    {
      name: "Apr",
      frequency: 27,
    },
    {
      name: "May",
      frequency: 18,
    },
    {
      name: "June",
      frequency: 23,
    },
    {
      name: "July",
      frequency: 34,
    },
    {
      name: "Aug",
      frequency: 34,
    },
    {
      name: "Sep",
      frequency: 34,
    },
    {
      name: "Oct",
      frequency: 34,
    },
    {
      name: "Nov",
      frequency: 34,
    },
    {
      name: "Dec",
      frequency: 34,
    },
  ];

  return (
    <div className='flex flex-col card shadow-lg '>
      <div className='flex justify-between px-2'>
        <div className='font-bold'>Growth</div>
        <div className='border p-2 rounded flex items-center'><IoMdArrowDropdown/>Monthly</div>
      </div>
      <AreaChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="frequency"
          stroke="#00BFA8"
          fill="#25CD25"
          fillOpacity={0.3}
        />
      </AreaChart>
    </div>
  );
}

export default Graph