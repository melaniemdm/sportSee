import './style.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

/**
 * It takes the data from the API and maps it into an array of objects.
 * </code>
 * 
 * 
 * A:
 * 
 * You can use <code>useEffect</code> to fetch the data and set it to the state.
 * <code>import React, { useState, useEffect } from "react";
 * import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
 * import axios from "axios";
 * 
 * export default function DailyActivity() {
 *   const [activities, setActivities] = useState([]);
 *   const { id } = useParams();
 * 
 *   useEffect(() =&gt; {
 *     const getData = async () =&gt; {
 *       const { data } = await axios.get(`http://localhost:3000/user/` + id + `/activity`);
 * @returns The data from the API is being returned.
 */
export default function DailyActivity() {
  const [activities, setActivities] = useState([]);
  const {id} = useParams();
/**
 * It takes the data from the API and maps it into an array of objects.
 */
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3000/user/`+ id +`/activity`);

const activitiesArray = data.data.sessions.map(activity=> { 
    return{
       name: activity.day,
       kilogram: activity.kilogram,
       calories: activity.calories
    }
   
  })
  setActivities(activitiesArray)
  }
 
 /* A hook that is used for performing side effects in function components. It serves the same purpose
 as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified
 into a single API. */
  useEffect(() => {
    getData();
  });

  return (<div> 
    <div className="titleDailyActivity">Activité quotidienne</div>
    <BarChart
      width={800}
      height={300}
      data={activities}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
        
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" stroke="white" />
      <YAxis yAxisId="right" orientation="right" stroke="gray" />
      <Tooltip />
      <Legend verticalAlign="top" height={36} align="right" iconType="cercle"/>
      <Bar yAxisId="right" dataKey="kilogram" fill="black" />
      <Bar yAxisId="left" dataKey="calories" fill="red"  />
     
    </BarChart></div>
  );
}
