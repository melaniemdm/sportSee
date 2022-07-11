
import './style.scss';


/**
 * It takes in a prop called data, and returns a div with a className of containerBodyMassIndex. Inside
 * that div, there's another div with a className of layoutcardBodyMass. Inside that div, there's
 * another div with a className of containerIconeBodyMass. Inside that div, there's another div with a
 * className of containerIconeBodyMass. Inside that div, there's an img tag with a src of
 * props.data.picture, a className of iconeBodyMass, and an alt of icone. Inside the layoutcardBodyMass
 * div, there's another div with a className of bodyMass. Inside that div, there's a text node with the
 * value of props.data.value, a text node with the value of typeMass, and another div with a className
 * of typeBodyMass. Inside that div, there's a text node with the value of props.data.type.
 * @param props - {
 * @returns a JSX element.
 */
 export default function BodyMassIndex(props){
const typeMass = props.data.type === "Calories"? "kCal" :" g";
    
    return (
        <div className="containerBodyMassIndex">
            <div className="layoutcardBodyMass">
            <div className="containerIconeBodyMass">
               <div className="containerIconeBodyMass"> <img src={props.data.picture} className="iconeBodyMass" alt="icone "/></div> 
                </div> 
                
                <div className="bodyMass">{props.data.value} <strong>{typeMass}</strong>
                <div className="typeBodyMass">{props.data.type} </div>
             

               
            </div></div>
        </div>
    )
};
