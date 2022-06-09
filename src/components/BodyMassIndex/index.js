import fire from "../../assets/fire.png";
import './style.scss';
import {getUser} from '../../utils/data';


function BodyMassIndex(props){
    const bodyMass = getUser(18).data.keyData;
    console.log(bodyMass)
    
    return (
        <div className="bodyMassIndex">
            <div className="containerIcone">
                <img src={fire} alt="icone"/>
                <div className="bodyMass calories">{props.data.value} {props.data.type}</div>

               
            </div>
        </div>
    )
}
export default BodyMassIndex;