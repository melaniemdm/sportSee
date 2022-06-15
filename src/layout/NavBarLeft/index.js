import "./style.scss";
import yoga from "../../assets/yoga.png";
import yogatete from "../../assets/yogaTete.png";
import bike from "../../assets/bike.png";
import swim from "../../assets/swim.png";
import swimtete from "../../assets/swimTete.png";
import alter from "../../assets/alter.png";

/**
 * It returns a div with a className of "containerIcone" which contains a div with a className of
 * "layoutIcone" which contains an img with a src of "yogatete" and an alt of "Icone Yogatete" and a
 * className of "yogaTete" and another img with a src of "yoga" and an alt of "Icone Yoga" and a
 * className of "yoga" and another div with a className of "layoutIcone" which contains an img with a
 * src of "bike" and an alt of "Icone Bike" and a className of "bike" and another div with a className
 * of "layoutIcone" which contains an img with a src of "swimtete" and an alt of "Icone SwimTete" and a
 * className of "swimTete" and another img with a src of "swim" and
 * @returns A React component.
 */
function NavBarLeft() {
  return (
    <div className="containerIcone">
      <div className="layoutIcone"> 
      <img src={yogatete} alt="Icone Yogatete" className="yogaTete" />
        <img src={yoga} alt="Icone Yoga" className="yoga" />
             </div>
      <div className="layoutIcone ">
        <img src={bike} alt="Icone Bike" className="bike" />
      </div>
      <div className="layoutIcone ">
      <img src={swimtete} alt="Icone SwimTete" className="swimTete" />
        <img src={swim} alt="Icone Swim" className="swim" />
      </div>
      <div className="layoutIcone ">
        <img src={alter} alt="Icone Alter" className="alter" />
      </div>
      <div className="textNavBarLeft">
      Copiryght, SportSee 2020
      </div>
    </div>
  );
}
export default NavBarLeft;
