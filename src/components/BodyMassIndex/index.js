
import './style.scss';
// import {getUser} from '../../utils/data';


/**
 * It's a function that returns a div with a class name of bodyMassIndex. Inside that div, there's
 * another div with a class name of containerIconeBodyMass. Inside that div, there's another div with a
 * class name of containerIconeBodyMass. Inside that div, there's an image with a source of
 * props.data.picture, a class name of iconeBodyMass, and an alt of icone.
 * 
 * After that, there's another div with a class name of bodyMass calories. Inside that div, there's a
 * value of props.data.value and a type of props.data.type.
 * @param props - {
 */
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