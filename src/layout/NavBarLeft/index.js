import "./style.scss";
import CardNavBarLeft from '../../components/CardNavBarLeft';
import yoga from "../../assets/yoga.png";
import bike from "../../assets/bike.png";
import swim from "../../assets/swim.png";
import alter from "../../assets/alter.png";
import React, { useEffect, useState } from "react";


/**
 * It's a function that returns a div with a className of containerNavBarLeft. Inside this div, there's
 * a div with a className of containerCard. Inside this div, there's a CardNavBarLeft component. This
 * component is a function that returns a div with a className of cardNavBarLeft. Inside this div,
 * there's an img with a src of the data.picture.
 * @returns The component is being returned.
 */
function NavBarLeft() {
  const [navBarLeft, setIconeNavBarLeft] = useState([]);

/**
 * I'm trying to set the state of the variable iconeNavBarLeft with the array of objects that I created
 * in the function.
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
setIconeNavBarLeft(iconeNavBarLeft);}
/* It's a hook that is used for performing side effects in function components. It serves the same
purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but
unified into a single API. */
useEffect(() => {
  getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
export default NavBarLeft;
