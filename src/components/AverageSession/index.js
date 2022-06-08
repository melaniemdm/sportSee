import './style.scss';
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
 } from "recharts";
import {getEverageSessions} from '../../utils/data';

const dataEverageSessions = getEverageSessions(18).data.sessions;
const everageSessions = dataEverageSessions.map(everageSession=> { 
  return{
    name: everageSession.name,
    day: everageSession.day,
    pv: 3800,
      
  }
 
})


export default function AverageSession() {
  return (<div>
  <div className="containerTitleGraphRed">Durée moyenne des sessions</div>
    <LineChart
      width={263}
      height={258}
      data={everageSessions}
      
    >
      
      <XAxis dataKey="name" />
      
      <Tooltip />
     
      
      <Line type="monotone" dataKey="day" stroke="black" />
    </LineChart></div>
  );
}
