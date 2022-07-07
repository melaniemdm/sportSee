import './style.scss';
import React, { useEffect, useState } from "react";
import {getDataScore} from '../../utils/api';
import { RadialBarChart, RadialBar } from "recharts";
import { useParams } from 'react-router-dom';




export default function Score() {
  const {id} = useParams();
  const [score, setScore] = useState([]);
  /**
   * I'm getting data from an API and then I'm setting the data to a variable called score.
   */


 /* It's a hook that is called when the component is mounted. */
  useEffect(() => {
    getDataScore(id, setScore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="layout"> <div className="titleScore">Score</div>
    
         <RadialBarChart
    width={window.innerWidth/5}
    height={228}
    cx={135}
    cy={125}
    innerRadius="75%"
    outerRadius="100%"
     data={score}
     className="score"
  >

    <RadialBar className="graphScore"
      label={{ position: "center", fill: "black" }}
      background
      clockWise
      dataKey="value"
      cornerRadius={30 / 2}
    />
    <text className="graphScore" x={155} y={125} dy={8} fill={"black"}>
    % 
      </text>
      <text className="txtObjectif" x={115} y={150} dy={8} fill={"rgba(116, 121, 140, 1)"}>
    de votre 
      </text> 
      <text className="txtObjectif" x={115} y={170} dy={8} fill={"rgba(116, 121, 140, 1)"}>
     objectif
      </text>   
  </RadialBarChart></div>
  );
}