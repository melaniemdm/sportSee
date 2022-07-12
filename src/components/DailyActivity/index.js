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
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../utils/api';
import ErrorGraph from '../ErrorGraph';

const api = new Api();


/**
 * It takes a rectangle's x, y, width, height, and radius, and returns a function that takes a fill,
 * fillOpacity, and stroke, and returns a path element
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
 * If the tooltip is active and there is a payload, then return a div with the value of the payload.
 * @returns The return is a function that returns a component.
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
 * It's a function that returns a bar chart.
 * @returns A React component.
 */
export default function DailyActivity() {
  const [activities, setDailyActivity] = useState([]);
  const {id} = useParams();
 
  /* A hook that is called when the component is mounted. */
  useEffect(() => {
    api.getDailyActivity(id, setDailyActivity);
   
  }, []);
  if(activities === 'error'){
    return (<div><ErrorGraph/></div>);
  }
  return (<div className="containerDailyActivity"> 
    <div className="containerTitleDailyActivity">
      <div className="titleDailyActivity">Activité quotidienne</div></div>
    <BarChart
      width={window.innerWidth/1.7}
      height={(window.innerHeight-91)/2.97}
      data={activities}
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
