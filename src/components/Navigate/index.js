import './style.scss'
import {Link} from 'react-router-dom';

function Navigate(){
    return(
        <div>
<nav className="navigate">
      <Link to=" " className="accueil">Accueil</Link> 
      <Link to=" " className="profil">profil</Link>
      <Link to=" " className="reglages">Reglages</Link>
      <Link to=" " className="communaute">Communauté</Link>
    </nav>
        </div>
    )
}
export default Navigate;