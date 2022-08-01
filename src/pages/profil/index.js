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
  const [name, setFirstName] = useState([]);
  const [bodyMassIndex, setBMI] = useState([]);
   
  /* It's a hook that allows you to perform side effects in function components. */
  useEffect(() => {
  
    api.getFirstName(id, setFirstName);
    api.getBMI(id, setBMI); 
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


