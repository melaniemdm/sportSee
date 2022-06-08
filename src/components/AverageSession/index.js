import './style.scss';
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
 } from "recharts";
import {getEverageSessions} from '../../utils/data';

const data = getEverageSessions(18).data.sessions;
console.log(data)
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
