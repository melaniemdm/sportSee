import './style.scss';
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "Intensité",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Vitesse",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Force",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Endurance",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Energie",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "Cardio",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

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
