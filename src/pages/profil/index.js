import "./style.scss";
import clappingTxt from "../../assets/clappingTxt.png";
import DailyActivity from "../../components/DailyActivity";
import AverageSession from "../../components/AverageSession";
import Score from "../../components/Score";
import Intensity from "../../components/Intensity";
import BodyMassIndex from "../../components/BodyMassIndex";
import { getUser } from "../../utils/data";
import fire from '../../assets/fire.png';
import prot from '../../assets/prot.png';
import apple from '../../assets/apple.png';
import lipides from '../../assets/lipides.png';

const keyData = getUser(18).data.keyData;
console.log(keyData);

const bodyMassIndex = []
bodyMassIndex.push({ value:keyData.calorieCount, type:"Calories", picture:fire} )
bodyMassIndex.push({value:keyData.proteinCount, type:"Protéines", picture:prot} )
bodyMassIndex.push({value:keyData.carbohydrateCount, type:"Glucides",picture:apple} )
bodyMassIndex.push({value:keyData.lipidCount, type:"Lipides", picture:lipides} )

function Profil() {
  const name = getUser(18).data.userInfos.firstName;
  console.log(name);

  return (
    <div className="containerFirst">
      <div className="titleProfil">
        Bonjour &nbsp;<div className="name">{name}</div>
      </div>
      <div className="txtProfil">
        <img src={clappingTxt} alt="logo clapping du texte" />
      </div>
      <div className="dailyActivity">
        <DailyActivity />
      </div>
      <div className="littleGraph">
        <div className="containerGraph averageSession">
          {" "}
          <AverageSession />
        </div>
        <div className="containerGraph intensity">
          <Intensity />
        </div>
        <div className="containerGraph score">
          <Score />
        </div>
      </div>

      <div className="containerBody">
        {bodyMassIndex.map(item=><BodyMassIndex data={item} /> )}
        
      </div>
    </div>
  );
}

export default Profil;
