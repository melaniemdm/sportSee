import './style.scss'
import {Link} from 'react-router-dom';

/**
 * It's a function that returns a div with a navbar and 4 links.
 * @returns A React component.
 */
function Navigate(){
    return(
        <div className="containerNav">
<nav className="navigate">
      <Link to="/accueil " className="accueil">Accueil</Link> 
      <Link to="/profil " className="profil">Profil</Link>
      <Link to="/reglage " className="reglage">Reglages</Link>
      <Link to="/communaute " className="communaute">Communauté</Link>
    </nav>
        </div>
    )
}
export default Navigate;