import './style.scss';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  
} from "recharts";
import {getPerformance} from '../../utils/api';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

/**
 * It takes the data from the API and maps it to an array of objects.
 * </code>
 * 
 * 
 * A:
 * 
 * You can use <code>useMemo</code> to memoize the data.
 * <code>const performancesArray = useMemo(() =&gt; {
 *   return data.data.data.map(performance =&gt; {
 *     return {
 *       subject: data.data.kind[performance.kind],
 *       A: performance.value,
 *       fullMark: 150
 *     };
 *   });
 * }, [data]);
 * </code>
 * @returns An array of objects.
 */
export default function Intensity() {
const [performances,setPerformance] = useState([]);
const {id} = useParams();


/* A hook that is called when the component is mounted. */
useEffect(() => {
  getPerformance(id, setPerformance);
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);
if(performances.length === 0) return null;
  return (
    <RadarChart
       width={window.innerWidth/5.47}
      height={window.innerWidth/3.96}
      data={performances}
      className="intensity"
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5,
        
      }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" stroke="white" tick={{fontSize: 12}}/>
      
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
