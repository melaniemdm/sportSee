import './style.scss';
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import {getPerformance} from '../../utils/data';


const dataPerf = getPerformance(18).data.data;
const kind = getPerformance(18).data.kind; 
const performances = dataPerf.map(performance=> { 
  return{
    subject: kind[performance.kind],
    A: performance.value,
    fullMark: 150
      
  }
 
})

export default function Intensity() {
  return (
    <RadarChart
      cx={120}
      cy={130}
     
      width={300}
      height={250}
      data={performances}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="red"
        fill="red"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
