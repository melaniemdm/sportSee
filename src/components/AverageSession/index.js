import './style.scss';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from 'recharts';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../utils/api';
import ErrorGraph from '../ErrorGraph';

const api = new Api();

/**
 * If the mouse is hovering over a data point, then display the value of that data point.
 * @returns The return is the average of the data.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltipAverage">
       
        <p className="label">{`${payload[0].value} min`}</p>
        
      </div>
    );
  }

  return null;
};


/**
 * It's a function that returns a line chart.
 * </code>
 * 
 * 
 * A:
 * 
 * You can use <code>window.innerWidth</code> and <code>window.innerHeight</code> to get the width and
 * height of the window.
 * <code>&lt;LineChart
 *   width={window.innerWidth}
 *   height={window.innerHeight}
 *   data={data}
 *   margin={{
 *     top: 5, right: 30, left: 20, bottom: 5,
 *   }}
 * &gt;
 *   &lt;CartesianGrid strokeDasharray="3 3" /&gt;
 *   &lt;XAxis dataKey="name" /&gt;
 *   &lt;YAxis /&gt;
 *   &lt;Tooltip /&gt;
 *   &lt;Legend /&gt;
 *   &lt;Line type="monotone" dataKey
 * @returns A line chart with a tooltip.
 */
export default function AverageSession() {
  const {id} = useParams();
  const [averageSessions,setAverageSessions]= useState([]);

 

  /* A hook that is called after the first render. It is used to fetch data from an API. */
  useEffect(() => {
    api.getAverageSessions(id, setAverageSessions);
  }, []);
  if(averageSessions === 'error'){
    return (<div><ErrorGraph/></div>);
  }
  return (<div className="containerAverageSession">
    <div className="containerTitleGraphAverageSession">Durée moyenne des sessions</div>
    <LineChart
      width={window.innerWidth/5.47}
      height={(window.innerHeight-91)/3.65}
      data={averageSessions}
      className="averageSession"
      margin={{
        top: 0,
        right: 30,
        left: 20,
        bottom: 0,
        
      }}
    >
      
      <XAxis dataKey="name" stroke="white" />
      
      <Tooltip content={<CustomTooltip />}/>
     
      
      <Line type="monotone" dataKey="pv" name="min"   stroke="white" fill="transparent" dot="false"/>
    </LineChart></div>
  );
}
