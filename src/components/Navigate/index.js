import './style.scss'
import {Link} from 'react-router-dom';


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
    )
};
