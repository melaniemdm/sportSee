import './style.scss';

import { Link } from 'react-router-dom';


/**
 * @function
 * CardNavBarLeft (react component)
 *@description It's a React functional component that returns a div with a nav and a link to an image.
 * @param props - Contains a data object with the following property: 'picture' to indicates the image to display.
 * @returns A React component to display a button on the left side of the page.
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

