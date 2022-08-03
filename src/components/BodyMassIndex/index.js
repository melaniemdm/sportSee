
import './style.scss';



/**
 * @function 
 * BodyMassIndex (react component)
 *@description  It's a React functional component  that takes a prop called data and returns a 
 * Body Mass Index card
 * @param {string} props.data.picture  string containing the source url of the picture
 * @param {number} props.data.value  attribute of type number containing the Bmi value to display 
 * @param {string} props.data.type  attribute of type string containing the Bmi type to display
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
