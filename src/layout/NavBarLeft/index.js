import "./style.scss";
import yoga from "../../assets/yoga.png";
import yogatete from "../../assets/yogaTete.png";
import bike from "../../assets/bike.png";
import swim from "../../assets/swim.png";
import swimtete from "../../assets/swimTete.png";
import alter from "../../assets/alter.png";

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
