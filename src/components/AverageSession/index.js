import './style.scss';
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
 } from "recharts";

const data = [
  {
    name: "L",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "M",
    uv: 30,
    pv: 1398,
    amt: 2210
  },
  {
    name: "M",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "J",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "V",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "S",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "D",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function AverageSession() {
  return (<div>
  <div className="containerTitleGraphRed">Durée moyenne des sessions</div>
    <LineChart
      width={263}
      height={258}
      data={data}
      
    >
      
      <XAxis dataKey="name" />
      
      <Tooltip />
     
      
      <Line type="monotone" dataKey="uv" stroke="black" />
    </LineChart></div>
  );
}
