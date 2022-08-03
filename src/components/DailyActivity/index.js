import './style.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { ErrorGraph } from '../ErrorGraph';


/**
 * @description It's a function to customize the shape of the bar in the Bar chart.
 * @param x - The x-coordinate of the top-left corner of the rectangle.
 * @param y - y-coordinate of the top-left corner of the bar
 * @param width - The width of the bar
 * @param height - The height of the bar.
 * @param radius - [top-left, top-right, bottom-right, bottom-left]
 * @returns A function that returns a path element.
 */
const getBarShape = (x, y, width, height, radius) => {
  const [tl, tr, bl, br] = radius;
  const d = `M${x},${y + tl}
        a${tl},${tl} 0 0 1 ${tl},${-tl}
        h${width - tl - tr}
        a${tr},${tr} 0 0 1 ${tr},${tr}
        v${height - tr - br}
        a${br},${br} 0 0 1 ${-br},${br}
        h${bl + (br - width)}
        a${bl},${bl} 0 0 1 ${-bl},${-bl}
        z`;
  return ({ fill, fillOpacity, stroke }) => (
    <path d={d} fill={fill} fillOpacity={fillOpacity} stroke={stroke} />
  );
};

/**
 * Function used to customize the information box on the graph
 * If the mouse is hovering over a data point, then display the value of that data point.
 * @returns The return is the result of the activity of the day .
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltipDailyActivity">
        <p className="label">{`${payload[1].value}kg`}</p>
        <p className="label">{`${payload[0].value}Kcal`}</p>
        
      </div>
    );
  }

  return null;
};

/**
 * @function 
 * DailyActivity (react component)
 *@description It's a React functional component that returns a bar chart containing .
 * It's using a hook that is called when the component is mounted. It calls the api.getDailyActivity() function
 * which makes an API call to get the data. The data is then displayed in a graph.
 * @returns The data is being returned in the form of a Bar chart.
 */
export function DailyActivity(props) {
  

  if(props.activities === 'error'){
    return (<div><ErrorGraph/></div>);
  }
  return (<div className="containerDailyActivity"> 
    <div className="containerTitleDailyActivity">
      <div className="titleDailyActivity">Activité quotidienne</div></div>
    <BarChart
      width={window.innerWidth/1.7}
      height={(window.innerHeight-91)/2.97}
      data={props.activities}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
        
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="number" />
      <YAxis yAxisId="left" stroke="white" />
      <YAxis yAxisId="right" orientation="right" stroke="gray" />
      <Tooltip
        content={<CustomTooltip />}
      />

      <Legend verticalAlign="top" height={36} align="right" iconType="cercle"/>
      <Bar yAxisId="left" name = "Poids (kg)" dataKey="calories" fill="black" barSize={7} shape={({ x, y, width, height,  background }) => {
        const Bar = getBarShape(x, y, width, height, [4, 4, 0, 0]);
        return (
          <g>
            <rect
              x={background.x}
              y={background.y}
              width={background.width}
              height={background.height}
              fill={'transparent'}
            />

            <Bar fillOpacity={1} fill={'black'} />
          </g>
        );
      }}/>
      <Bar yAxisId="right" name = "Calories brûlées (kCal)"  dataKey="kilogram" fill="red" barSize={7} shape={({ x, y, width, height, background }) => {
        const Bar = getBarShape(x, y, width, height, [4, 4, 0, 0]);
        return (
          <g>
            <rect
              x={background.x}
              y={background.y}
              width={background.width}
              height={background.height}
              fill={'transparent'}
            />

            <Bar fillOpacity={1} fill={'red'} />
          </g>
        );
      }}/>
     
     
    </BarChart></div>
  );
}
