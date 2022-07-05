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
    width={263}
    height={228}
    cx={135}
    cy={89}
    innerRadius="50%"
  
     data={score}
  >

    <RadialBar className="graphScore"
      label={{ position: "center", fill: "black" }}
      background
      clockWise
      dataKey="value"
      cornerRadius={30 / 2}
    />
    <text className="graphScore" x={155} y={90} dy={8} fill={"black"}>
    % 
      </text>
      <text className="txtObjectif" x={120} y={110} dy={8} fill={"black"}>
    de votre 
      </text> 
      <text className="txtObjectif" x={120} y={130} dy={8} fill={"black"}>
     objectif
      </text>   
  </RadialBarChart></div>
  );
}