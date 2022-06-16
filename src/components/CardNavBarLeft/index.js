import "./style.scss";
import yoga from "../../assets/yoga.png";
import bike from "../../assets/bike.png";
import swim from "../../assets/swim.png";
import alter from "../../assets/alter.png";
import { Link } from "react-router-dom";

function CardNavBarLeft() {
  return (
    <div>
      <div className="layoutIcone">
        <Link to="" className="">
          <img src={yoga} alt="Icone Yoga" className="yoga" />
        </Link>
      </div>
      <div className="layoutIcone ">
        <Link to="" className="">
          <img src={bike} alt="Icone Bike" className="bike" />
        </Link>
      </div>
      <div className="layoutIcone ">
        <Link to="" className="">
          <img src={swim} alt="Icone Swim" className="swim" />
        </Link>
      </div>
      <div className="layoutIcone ">
        <Link to="" className="">
          <img src={alter} alt="Icone Alter" className="alter" />
        </Link>
      </div>
    </div>
  );
}
export default CardNavBarLeft;
