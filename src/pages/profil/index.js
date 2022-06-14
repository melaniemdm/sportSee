import "./style.scss";
import clappingTxt from "../../assets/clappingTxt.png";
import DailyActivity from "../../components/DailyActivity";
import AverageSession from "../../components/AverageSession";
import Score from "../../components/Score";
import Intensity from "../../components/Intensity";
import BodyMassIndex from "../../components/BodyMassIndex";
import fire from '../../assets/fire.png';
import prot from '../../assets/prot.png';
import apple from '../../assets/apple.png';
import lipides from '../../assets/lipides.png';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


function Profil() {
 

  //const name = getUser(18).data.userInfos.firstName;
  const {id} = useParams();
 const [name, setName] = useState([]);
 const [bodyMassIndex,setBodyMassIndex]= useState([]);
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3000/user/`+id);
    setName(data.data.userInfos.firstName);
  const keyData = data.data.keyData;

    let bmiArray =[]
    bmiArray.push({ value:keyData.calorieCount, type:"Calories", picture:fire} )
    bmiArray.push({value:keyData.proteinCount, type:"Protéines", picture:prot} )
    bmiArray.push({value:keyData.carbohydrateCount, type:"Glucides",picture:apple} )
    bmiArray.push({value:keyData.lipidCount, type:"Lipides", picture:lipides} )
    setBodyMassIndex(bmiArray)
  };
  useEffect(() => {
    getData();
  });
 
  
  return (
    <div className="containerFirst">
            

    
      <div className="titleProfil">
    
        Bonjour &nbsp;<div className="name" >{name}</div>
      </div>
      <div className="txtProfil">
        <img src={clappingTxt} alt="logo clapping du texte" />
      </div>
      <div className="dailyActivity">
        <DailyActivity />
      </div>
      <div className="littleGraph">
        <div className="containerGraph averageSession">
          {" "}
          <AverageSession />
        </div>
        <div className="containerGraph intensity">
          <Intensity />
        </div>
        <div className="containerGraph score">
          <Score />
        </div>
      </div>

      <div className="containerBody">
        {bodyMassIndex.map((item,index)=><BodyMassIndex key={index} data={item} /> )}
        
      </div>
    </div>
  );
}

export default Profil;
