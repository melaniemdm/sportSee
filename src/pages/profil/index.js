import "./style.scss";
import clappingTxt from "../../assets/clappingTxt.png";
import DailyActivity from "../../components/DailyActivity";
import AverageSession from "../../components/AverageSession";
import Score from "../../components/Score";
import Intensity from "../../components/Intensity";
function Profil() {
  const name = "Thomas";
  return (
    <div className="containerFirst">
      <div className="titleProfil">
        Bonjour &nbsp;<div className="name">{name}</div>
      </div>
      <div className="txtProfil">
        <img src={clappingTxt} alt="logo clapping du texte" />
      </div>
      <div className="containerGray"><DailyActivity  /></div>
      <div className="littleGraph">
      <div className="containeRed"> <AverageSession /></div> 
      <div className="containerBlack"><Intensity /></div> 
        <div className="containerGray"><Score /></div> 
      
      </div>
    </div>
  );
}

export default Profil;
