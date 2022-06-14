import './style.scss';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
 } from "recharts";
//import {getEverageSessions} from '../../utils/data';
//const dataEverageSessions = getEverageSessions(18).data.sessions;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


export default function AverageSession() {
  const {id} = useParams();
const [averageSessions,setAverageSessions]= useState([]);

const getData = async () => {
  const arrayDay =["L", "M", "M", "J", "V", "S","D"];
  const { data } = await axios.get(`http://localhost:3000/user/`+ id +` /average-sessions`);
const averageSessionsArray = data.data.sessions.map(averageSession=> { 
  return{
    name: arrayDay[averageSession.day -1],
    pv: averageSession.sessionLength,
  }
 
})
setAverageSessions(averageSessionsArray)
console.log(averageSessionsArray)
}
 
useEffect(() => {
  getData();
});

  return (<div>
  <div className="containerTitleGraphRed">Durée moyenne des sessions</div>
    <LineChart
      width={263}
      height={258}
      data={averageSessions}
      
    >
      
      <XAxis dataKey="name" />
      
      <Tooltip />
     
      
      <Line type="monotone" dataKey="pv" stroke="black" />
    </LineChart></div>
  );
}
