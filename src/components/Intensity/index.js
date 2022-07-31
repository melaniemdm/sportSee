import './style.scss';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  
} from 'recharts';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../utils/api';
import { ErrorGraph } from '../ErrorGraph';

/* Creating a new instance of the Api class. */
const api = new Api();

/**
 * @module 
 * Intensity (react component)
 *@description It takes in an id, uses that id to get data from an API, and then displays that data in a radar
 * chart.
 * </code>
 * 
 * 
 * A:
 * 
 * I think you are looking for <code>useCallback</code> hook.
 * <code>const [performances,setPerformance] = useState([ ]);
 * const {id} = useParams();
 * 
 * const getPerformance = useCallback(() =&gt; {
 *   api.getPerformance(id, setPerformance);
 * }, [id]);
 * 
 * useEffect(() =&gt; {
 *   getPerformance();
 * },[getPerformance]);
 * </code>
 * @returns The radar chart is being returned.
 */

export function Intensity() {
  const [performances,setPerformance] = useState([ ]);
  const {id} = useParams();

  /* Calling the api.getPerformance function. */
  useEffect(() => {
    api.getPerformance(id, setPerformance);
  },[]);

  if(performances === 'error'){
    return (<div><ErrorGraph/></div>);
  }
  else if(performances.length === 0) {return null;}
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
