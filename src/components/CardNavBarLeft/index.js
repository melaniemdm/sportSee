import './style.scss';

import { Link } from 'react-router-dom';


/**
 * @module 
 * CardNavBarLeft (react component)
 *@description It's a function that returns a div with a nav and a link to an image.
 * @param props - {
 * @returns A React component.
 */
export function CardNavBarLeft(props) {
  return (
    <div className="containerIcones">
      
      <nav className="navLeft">
        <Link to="">
          <img src={props.data.picture} alt="Icone de navigation left" className="cardNavBarLeft" />
        </Link></nav>
    

    </div>
  );
}

