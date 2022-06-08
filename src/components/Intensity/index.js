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


const data = getPerformance(18).data.kind; 
console.log(data)

export default function Intensity() {
  return (
    <RadarChart
      cx={120}
      cy={130}
     
      width={300}
      height={250}
      data={data}
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
