import './style.scss';
import clappingTxt from '../../assets/clappingTxt.png';

function Profil(){
    const name= "Thomas";
    return(
      <div className="containerFirst">
      <div className="titleProfil">Bonjour &nbsp;<div className="name">{name}</div></div>
      <div className="txtProfil">
      <img src={clappingTxt} alt="logo clapping du texte" />
      </div>
      </div>
     
     
    );
  }
  
  export default Profil;