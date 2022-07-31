
import './style.scss';



/**
 * @module 
 * BodyMassIndex (react component)
 *@description  It's a function that takes a prop called data and returns a div with a class of
 * containerBodyMassIndex. Inside that div is another div with a class of layoutcardBodyMass. Inside
 * that div is another div with a class of containerIconeBodyMass. Inside that div is another div with
 * a class of containerIconeBodyMass. Inside that div is an img tag with a src of props.data.picture
 * and a class of iconeBodyMass. Inside that div is another div with a class of bodyMass. Inside that
 * div is a text node with the value of props.data.value, a text node with the value of typeMass, and
 * another div with a class of typeBodyMass. Inside that div is a text node with the value of
 * props.data.type.
 * @param props - {
 */
export  function BodyMassIndex(props){
  const typeMass = props.data?.type === 'Calories'? 'kCal' :' g';

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
  );
}
