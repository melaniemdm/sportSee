import './style.scss';
import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar } from 'recharts';
/**
 * It's a function that returns a div with a navbar and 4 links.
 * @returns A React component.
 */
import { useParams } from 'react-router-dom';
import Api from '../../utils/api';
import ErrorGraph from '../ErrorGraph';

const api = new Api();


/**
 * I'm trying to display a graph in a component, but the graph is not displayed.
 * @returns The data is being returned as an array of objects.
 */
export default function Score() {
  const {id} = useParams();
  const [score, setScore] = useState([]);
  
  /* It's a hook that is called after every render. */
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
          label={{ position: 'center', fill: 'black' }}
          background
          clockWise
          dataKey="value"
          cornerRadius={30 / 2}
        />
     
      </RadialBarChart>
      <div className="containerTextScore">
        <div className="pourcentScore"  fill={'black'}>
    % 
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