import './style.scss';
import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar } from 'recharts';
import { useParams } from 'react-router-dom';
import { Api } from '../../utils/api';
import { ErrorGraph } from '../ErrorGraph';

/* It's an instance of the Api class. */
const api = new Api();


/**
 * @module 
 * Score (react component)
 *@description It's a hook that is called when the component is mounted. It calls the api.getDataScore() function
 * which makes an API call to get the data. The data is then displayed in a graph.
 * </code>
 * @returns The data is being returned in the form of a graph.
 */
export function Score() {
  const {id} = useParams();
  const [score, setScore] = useState([]);
  

  /* It's a hook that is called when the component is mounted. It calls the api.getDataScore() function
  which makes an API call to get the data. The data is then displayed in a graph. */
  useEffect(() => {
    api.getDataScore(id, setScore);
  }, []);
  if(score === ''){
    return (<div><ErrorGraph/></div>);
  }
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
          label={{ position: 'center', fill: 'white' }}
          background
          clockWise
          dataKey="value"
          cornerRadius={30 / 2}
        />
     
      </RadialBarChart>
      <div className="containerTextScore">
        <div className="pourcentScore"  fill={'black'}>
          { score[1]?.value }  %
        </div>
        <div className="containerTextitle">
  
          <div className="txtObjectif"  fill={'rgba(116, 121, 140, 1)'}>
    de votre <br></br>
          </div> 
          <div className="txtObjectif"  fill={'rgba(116, 121, 140, 1)'}>
      objectif
          </div>  </div></div>
  
    </div>
  );
}