import './style.scss';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
 } from "recharts";
import React, { useEffect, useState } from "react";
import {getAverageSessions} from '../../utils/api';
import { useParams } from 'react-router-dom';



const CustomTooltip = ({ active, payload, label }) => {
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
 * A function that returns a component that displays a graph
 * @returns An array of objects.
 */
export default function AverageSession() {
  const {id} = useParams();
const [averageSessions,setAverageSessions]= useState([]);

 
/* A hook that is called when the component is mounted. It is an asynchronous function that makes
an API call to the server and then sets the state of the component with the data returned by the API

call. */
useEffect(() => {
  getAverageSessions(id, setAverageSessions);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (<div className="containerAverageSession">
  <div className="containerTitleGraphAverageSession">Durée moyenne des sessions</div>
    <LineChart
     width={window.innerWidth/5.47}
      height={window.innerHeight/3.96}
       data={averageSessions}
       className="averageSession"
       margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
        
      }}
    >
      
      <XAxis dataKey="name" stroke="white" />
      
      <Tooltip content={<CustomTooltip />}/>
     
      
      <Line type="monotone" dataKey="pv" name="min"   stroke="white" fill="transparent" dot="false"/>
    </LineChart></div>
  );
}
