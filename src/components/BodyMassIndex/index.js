
import './style.scss';
// import {getUser} from '../../utils/data';


function BodyMassIndex(props){

    
    return (
        <div className="bodyMassIndex">
            <div className="containerIconeBodyMass">
               <div className="containerIconeBodyMass"> <img src={props.data.picture} className="iconeBodyMass" alt="icone "/></div> 
                </div> 
                
                <div className="bodyMass calories">{props.data.value} {props.data.type} 
             

               
            </div>
        </div>
    )
}
export default BodyMassIndex;