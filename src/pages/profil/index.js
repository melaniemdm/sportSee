import "./style.scss";
import clappingTxt from "../../assets/clappingTxt.png";
import DailyActivity from "../../components/DailyActivity";
import AverageSession from "../../components/AverageSession";
import Score from "../../components/Score";
import Intensity from "../../components/Intensity";
import BodyMassIndex from "../../components/BodyMassIndex";
import React, { useEffect, useState } from "react";
import {getFirstName} from '../../utils/api';
import {getBMI} from '../../utils/api';
import { useParams } from "react-router-dom";


/**
 * The function Profil() is called when the user is on the profil page. It displays the user's name, a
 * graph of his daily activity, a graph of his average session, a graph of his intensity and a graph of
 * his score. It also displays a graph of his body mass index.
 * @returns The return is the component Profil.
 */
function Profil() {
  const { id } = useParams();
  const [name, setFirstName] = useState([]);
  const [bodyMassIndex, setBMI] = useState([]);
  
 
/* A hook that is called when the component is mounted. It is used to fetch data from an API. */
  useEffect(() => {
    getFirstName(id, setFirstName);
    getBMI(id, setBMI); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="containerProfil">
      <div className="titleProfil">Bonjour &nbsp;<div className="nameProfil">{name}</div>
      </div>
      <div className="txtProfil">
        <img src={clappingTxt} alt="logo clapping du texte" />
      </div>
      <div className="containerGraphUser">
      <div className="containerGraph">
      <div className="dailyActivity">
        <DailyActivity />
      </div>
      <div className="containerLittleGraphs">
      <div className="averageSession">
       
          <AverageSession />
        </div>
        <div className="intensity">
          <Intensity />
        </div>
        <div className="score">
          <Score />
        </div></div>
      </div>
              

      <div className="containerBodyMass">
        {bodyMassIndex.map((item, index) => (
          <BodyMassIndex key={index} data={item} />
        ))}
      </div>
    </div></div>
  );
}

export default Profil;
