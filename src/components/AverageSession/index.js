import './style.scss';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from 'recharts';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorGraph } from '../ErrorGraph';

/* It's creating a new instance of the Api class. */
import { Api } from '../../utils/api';
const api = new Api();
// import { ApiMock } from '../../utils/apiMock';
// const api = new ApiMock();

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
*@module 
 * AverageSession (react component)
 @description It's a function that returns a graph.
 * </code>
 * @returns A line chart.
 */
export  function AverageSession() {
  const {id} = useParams();
  const [averageSessions,setAverageSessions]= useState([]);

 


  /* It's calling the function getAverageSessions from the Api class. */
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
