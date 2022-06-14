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
export default function DailyActivity() {
  const [activities, setActivities] = useState([]);
  const {id} = useParams();
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

  
  useEffect(() => {
    getData();
  });

  return (
    <BarChart
      width={500}
      height={300}
      data={activities}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" stroke="white" />
      <YAxis yAxisId="right" orientation="right" stroke="gray" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="calories" fill="black" />
      <Bar yAxisId="right" dataKey="kilogram" fill="red" />
    </BarChart>
  );
}
