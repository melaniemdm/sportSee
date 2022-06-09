import "./style.scss";
import clappingTxt from "../../assets/clappingTxt.png";
import DailyActivity from "../../components/DailyActivity";
import AverageSession from "../../components/AverageSession";
import Score from "../../components/Score";
import Intensity from "../../components/Intensity";
import BodyMassIndex from "../../components/BodyMassIndex";
import { getUser } from "../../utils/data";

const keyData = getUser(18).data.keyData;
console.log(keyData);

const bodyMassIndex = []
bodyMassIndex.push({value:keyData.calorieCount, type:"Calories"} )
bodyMassIndex.push({value:keyData.proteinCount, type:"Protéines"} )
bodyMassIndex.push({value:keyData.carbohydrateCount, type:"Glucides"} )
bodyMassIndex.push({value:keyData.lipidCount, type:"Lipides"} )

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
        <div className="containeRed">
          {" "}
          <AverageSession />
        </div>
        <div className="containerBlack">
          <Intensity />
        </div>
        <div className="containerGray score">
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
