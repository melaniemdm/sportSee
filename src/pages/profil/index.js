import './style.scss';
import clappingTxt from '../../assets/clappingTxt.png';
import { DailyActivity } from '../../components/DailyActivity';
import { AverageSession } from '../../components/AverageSession';
import { Score } from '../../components/Score';
import { Intensity } from '../../components/Intensity';
import { BodyMassIndex } from '../../components/BodyMassIndex';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Error } from '../../pages/Error';
import { Api } from '../../utils/api';

const api = new Api();


/**
 * @function 
 * Profil (react component)
 *@description t's a React functional component that get the data from the API and display it as User name and in the BodyMassIndex component.
 * The component use a hook to call the getFirstName and getBMI methods of the API, and pass the 'set function' of states as parameter.
 * This components contains the graphs component as children
 * @return the full Profil page
 */
export  function Profil() {
  const { id } = useParams();
  const [name, setFirstName] = useState('');
  const [bodyMassIndex, setBMI] = useState([]);
  const [averageSessions,setAverageSessions]= useState([]);
  const [activities, setDailyActivity] = useState([]);
  const [score, setScore] = useState([]);
  const [performances,setPerformance] = useState([ ]);
  /* It's a hook that allows you to perform side effects in function components. */
  useEffect(() => {
  
    api.getFirstName(id, setFirstName);
    api.getBMI(id, setBMI); 
    api.getAverageSessions(id, setAverageSessions);
    api.getDailyActivity(id, setDailyActivity);
    api.getPerformance(id, setPerformance);
    api.getDataScore(id, setScore);
  
  },[]);
  if(name=== 'error'){
    return <Error type="unavailable"/>;
  }
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
            <DailyActivity activities={activities}/>
          </div>
          <div className="containerLittleGraphs">
            <div className="averageSession">
       
              <AverageSession averageSessions={averageSessions}/>
            </div>
            <div className="intensity">
              <Intensity  performances={performances}/>
            </div>
            <div className="score">
              <Score score={score}/>
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


