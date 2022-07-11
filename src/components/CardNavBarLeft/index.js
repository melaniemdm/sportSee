import './style.scss';

import { Link } from 'react-router-dom';

/**
 * It's a function that returns a div with a navbar and a link to a picture.
 * @param props - {
 * @returns The CardNavBarLeft component is being returned.
 */
export default function CardNavBarLeft(props) {
  return (
    <div className="containerIcones">
      
      <nav className="navLeft">
        <Link to="" className="">
          <img src={props.data.picture} alt="Icone de navigation left" className="cardNavBarLeft" />
        </Link></nav>
    

    </div>
  );
}

