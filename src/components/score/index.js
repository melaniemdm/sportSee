import './style.scss';

import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const score = 0.3;
const data = [
  { name: "Group A", value: score },
  { name: "Group B", value: 1 - score },
];

export default function App() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={1000}
        endAngle={0}
        data={data}
        cx={130}
        cy={120}
        innerRadius={70}
        outerRadius={80}
        fill="#8884d8"
        label
        >
          <Cell key="0" fill="red" />
          <Cell key="1" fill="#DDDDDD" />

      </Pie>
    </PieChart>
  );
}