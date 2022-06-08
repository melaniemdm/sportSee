import './style.scss';
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { getActivity } from '../../utils/data';

const data = getActivity(18).data.sessions;
console.log(data)

export default function DailyActivity() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" stroke="white" />
      <YAxis yAxisId="right" orientation="right" stroke="gray" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="pv" fill="black" />
      <Bar yAxisId="right" dataKey="uv" fill="red" />
    </BarChart>
  );
}
