import './style.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import React, { useEffect, useState } from "react";
import {getDailyActivity} from '../../utils/api';
import { useParams } from 'react-router-dom';


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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[1].value}kg`}</p>
        <p className="label">{`${payload[0].value}Kcal`}</p>
        
      </div>
    );
  }

  return null;
};
export default function DailyActivity() {
  const [activities, setDailyActivity] = useState([]);
  const {id} = useParams();

 
 /* A hook that is used for performing side effects in function components. It serves the same purpose
 as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified
 into a single API. */
  useEffect(() => {
    getDailyActivity(id, setDailyActivity);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (<div className="containerDailyActivity"> 
  <div className="containerTitleDailyActivity">
    <div className="titleDailyActivity">Activité quotidienne</div></div>
    <BarChart
      width={800}
      height={300}
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
      <Bar yAxisId="left" name = "Poids (kg)" dataKey="calories" fill="black" barSize={7} shape={({ x, y, width, height, value, background }) => {
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
      <Bar yAxisId="right" name = "Calories brûlées (kCal)"  dataKey="kilogram" fill="red" barSize={7} shape={({ x, y, width, height, value, background }) => {
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
