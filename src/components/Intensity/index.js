import './style.scss';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  
} from 'recharts';
import { ErrorGraph } from '../ErrorGraph';


/**
 * @function 
 * Intensity (react component)
 * @description It's a React functional component that takes in an user id, uses that id to get data from an API, and then 
 * displays that data in a radar chart.
 * It's using a hook that is called when the component is mounted. It calls the api.getDataScore() function
 * which makes an API call to get the data. The data is then displayed in a graph.
 * @returns The data is being returned in the form of a radar chart.
 */

export function Intensity(props) {


  if(props.performances === 'error'){
    return (<div><ErrorGraph/></div>);
  }
  else if(props.performances.length === 0) {return null;}
  return (
    <RadarChart
      width={window.innerWidth/5.47}
      height={(window.innerHeight-91)/3.65}
      data={props.performances}
      className="intensity"
      margin={{
        top: 0,
        right: 47,
        left: 25,
        bottom: 0,
        
      }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" stroke="white" tick={{fontSize: 10}}/>
      
      <Radar
        name="Mike"
        dataKey="A"
        stroke="red"
        fill="red"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
