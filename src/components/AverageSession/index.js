import './style.scss';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from 'recharts';

import { ErrorGraph } from '../ErrorGraph';


/**
 * Function used to customize the information box on the graph
 * If the mouse is hovering over a data point, then display the value of that data point.
 * @returns The return is the average of the session.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltipAverage">
       
        <p className="label">{`${payload[0].value} min`}</p>
        
      </div>
    );
  }

  return null;
};

/**
*@function 
 * AverageSession (react component)
 * @description It's a React functional component that returns a graph containing the average sessions.
 * It's using a hook that is called when the component is mounted. It calls the api.getAverageSessions() function
 * which makes an API call to get the data. The data is then displayed in a graph.
 * @returns The data is being returned in the form of a graph.
 */
export  function AverageSession(props) {
 
  if(props.averageSessions === 'error'){
    return (<div><ErrorGraph/></div>);
  }
  return (<div className="containerAverageSession">
    <div className="containerTitleGraphAverageSession">Durée moyenne des sessions</div>
    <LineChart
      width={window.innerWidth/5.47}
      height={(window.innerHeight-91)/3.65}
      data={props.averageSessions}
      className="averageSession"
      margin={{
        top: 0,
        right: 30,
        left: 20,
        bottom: 0,
        
      }}
    >
      
      <XAxis dataKey="name" stroke="white" />
      
      <Tooltip content={<CustomTooltip />}/>
     
      
      <Line type="monotone" dataKey="pv" name="min"   stroke="white" fill="transparent" dot="false"/>
    </LineChart></div>
  );
}
