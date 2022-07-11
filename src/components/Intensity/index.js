import './style.scss';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  
} from 'recharts';
import {getPerformance} from '../../utils/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


/**
 * It's a radar chart that displays the performance of a student in different subjects
 * @returns An array of objects.
 */
export default function Intensity() {
  const [performances,setPerformance] = useState([]);
  const {id} = useParams();



  /* A hook that is called when the component is mounted. It is used to fetch data from an API. */
  useEffect(() => {
    getPerformance(id, setPerformance);
  },[]);
  if(performances.length === 0) {return null;}
  return (
    <RadarChart
      width={window.innerWidth/5.47}
      height={(window.innerHeight-91)/3.65}
      data={performances}
      className="intensity"
      margin={{
        top: 0,
        right: 47,
        left: 25,
        bottom: 0,
        
      }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" stroke="white" tick={{fontSize: 10}}/>
      
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
