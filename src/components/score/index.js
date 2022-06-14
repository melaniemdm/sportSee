import './style.scss';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell } from "recharts";
import { useParams } from 'react-router-dom';
// const score = 0.3;



export default function Score() {
  const {id} = useParams();
  const [score, setScore] = useState([]);
  const getData = async () => {
  const { data } = await axios.get(`http://localhost:3000/user/` + id);
const scoreUser = data.data.todayScore ? data.data.todayScore : data.data.score;
const dataScore = [
  { name: "Group A", value: scoreUser },
  { name: "Group B", value: 1 - scoreUser },
];
setScore(dataScore)
console.log(dataScore)
  }

  useEffect(() => {
    getData();
  });

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={1000}
        endAngle={0}
        data={score}
        cx={130}
        cy={120}
        innerRadius={70}
        outerRadius={80}
        fill="#8884d8"
        label
        >
          <Cell key="0" fill="red" />
          <Cell key="1" fill="#DDDDDD" />

      </Pie>
    </PieChart>
  );
}