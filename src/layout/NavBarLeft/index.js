import "./style.scss";
import CardNavBarLeft from '../../components/CardNavBarLeft';
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
    <nav className="containerIcone">
      <CardNavBarLeft/>
      <div className="textNavBarLeft">
      Copiryght, SportSee 2020
      </div>
    </nav>
  );
}
export default NavBarLeft;
