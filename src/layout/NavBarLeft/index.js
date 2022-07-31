import './style.scss';
import { CardNavBarLeft } from '../../components/CardNavBarLeft';
import yoga from '../../assets/yoga.png';
import bike from '../../assets/bike.png';
import swim from '../../assets/swim.png';
import alter from '../../assets/alter.png';
import React, { useEffect, useState } from 'react';





/**
 * @module 
 * NavBarLeft (react component)
 *@description I'm trying to get the data from the array and display it in the CardNavBarLeft component.
 * @returns The function NavBarLeft is being returned.
 */

export function NavBarLeft() {
  const [navBarLeft, setIconeNavBarLeft] = useState([ ]);

  /**
  * I'm trying to push an image into an array.
  */
  const getData = async () => {
    let iconeNavBarLeft=[];
    iconeNavBarLeft.push({
      picture:yoga,
    });
    iconeNavBarLeft.push({
      picture:bike,
    });
    iconeNavBarLeft.push({
      picture:swim,
    });
    iconeNavBarLeft.push({
      picture:alter,
    });
    setIconeNavBarLeft(iconeNavBarLeft);};

  
  /* A hook that is called after every render. */
  useEffect(() => {
    getData();
  }, []);
  return (<div className="containerNavBarLeft ">
  
    <div className="containerCard">
      {navBarLeft.map((item, index)=>(
        <CardNavBarLeft  key={index} data={item}/>

      ))}</div>
   
    <div className="textNavBarLeft">
      Copiryght, SportSee 2020
    </div>
  </div>
  );
}

