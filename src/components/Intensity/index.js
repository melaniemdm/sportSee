import './style.scss';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
//import {getPerformance} from '../../utils/data';
import React, { useEffect, useState } from "react";
import axios from "axios";

//const dataPerf = getPerformance(18).data.data;
//const kind = getPerformance(18).data.kind; 




export default function Intensity() {
const [performances,setPerformance] = useState([]);

const getData=async()=>{
  const {data}=await axios.get('http://localhost:3000/user/12/performance')

const performancesArray = data.data.data.map(performance=> { 
  return{
    subject: data.data.kind[performance.kind],
    A: performance.value,
    fullMark: 150
      
  }

})
 console.log(performancesArray)
setPerformance(performancesArray)
}

useEffect(() => {
  getData();
}, []);

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
