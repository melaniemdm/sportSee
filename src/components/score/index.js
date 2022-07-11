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
    <div className="containerScore"> 
    <div className="titleScore">Score</div>
    
         <RadialBarChart
    width={window.innerWidth/5.47}
    height={(window.innerHeight-91)/3.65}
    innerRadius="75%"
    outerRadius="100%"
     data={score}
     className="score"
     margin={{
      top: 15,
      right: 5,
      left: 5,
      bottom: 0,
      
    }}
  >

    <RadialBar className="graphScore"
      label={{ position: "center", fill: "black" }}
      background
      clockWise
      dataKey="value"
      cornerRadius={30 / 2}
    />
     
  </RadialBarChart>
  <div className="containerTextScore">
  <div className="pourcentScore"  fill={"black"}>
    % 
      </div>
  <div className="containerTextitle">
  
      <div className="txtObjectif"  fill={"rgba(116, 121, 140, 1)"}>
    de votre <br></br>
      </div> 
      <div className="txtObjectif"  fill={"rgba(116, 121, 140, 1)"}>
      objectif
      </div>  </div></div>
  
  </div>
  );
}