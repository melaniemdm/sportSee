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
//import { getActivity } from '../../utils/data';
import React, { useEffect, useState } from "react";
import axios from "axios";

//const data = getActivity(18).data.sessions;


// console.log(data)

export default function DailyActivity() {
  const [activities, setActivities] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3000/user/12/activity`);

   
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
  }, []);

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
