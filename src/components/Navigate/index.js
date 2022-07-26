import './style.scss';
import {Link} from 'react-router-dom';

/**
 * It's a function that returns a div that contains a nav that contains 4 links.
 * </code>
 * I'm not sure if I'm doing it right, but I'm trying to make a navbar with 4 links.
 * I'm using React Router.
 * I'm using React.
 * I'm using React-Bootstrap.
 * I'm using React-Router-Bootstrap.
 * I'm using React-Router-Dom.
 * I'm using React-Router-Hash-Link.
 * I'm using React-Router-Hash-Link.
 * I'm using React-Router-Hash-Link.
 * I'm using React-Router-Hash-Link.
 * I'm using React-Router-Hash-Link.
 * I'm using React-Router-Hash-Link.
 * I'm using React-Router-Hash-Link.
 * I'm using React-Router-Hash-Link.
 * I'm
 * @returns A React component.
 */

export default function Navigate(){
  return(
    <div className="containerNav">
      <nav className="navigate">
        <Link to="/accueil" className="accueil">Accueil</Link> 
        <Link to="/profil" className="profil">Profil</Link>
        <Link to="/reglage" className="reglage">Réglage</Link>
        <Link to="/communaute" className="communaute">Communauté</Link>
      </nav>
    </div>
  );
}
