import "./style.scss";

import { Link } from "react-router-dom";

function CardNavBarLeft(props) {
  return (
    <div>
      <div className="layoutIcone">
        <Link to="" className="">
          <img src={props.data.picture} alt="Icone de navigation left" className="containerIconeNavBarLeft" />
        </Link>
      </div>
     

    </div>
  );
}
export default CardNavBarLeft;
