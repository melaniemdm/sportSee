import './style.scss';

import { RadialBarChart, RadialBar } from 'recharts';
import { ErrorGraph } from '../ErrorGraph';


/**
 * @function 
 * Score (react component)
 *@description It's a React functional component that display the current score of the user.
 * It's using a hook that is called when the component is mounted. It calls the api.getDataScore() function
 * which makes an API call to get the data. The data is then displayed in a graph.
 * @returns The data is being returned in the form of a graph.
 */
export function Score(props) {

  if(props.score === ''){
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
        data={props.score}
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
          { props.score[1]?.value }  %
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