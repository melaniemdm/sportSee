
import './style.scss';



/**
 * @function 
 * BodyMassIndex (react component)
 *@description  It's a React functional component  that takes a prop called data and returns a 
 * Body Mass Index card
 * @param props props contains a data object with the following properties: 'type' to indicates which 
 * type is displayed and what unity has to be set, 'picture' to manage the picture to display on the 
 * component and 'value' to set the amount of kCal or g to display
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
