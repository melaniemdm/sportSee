import './style.scss';
import logo from '../../assets/logo.png';
import { Navigate } from '../../components/Navigate';




/**
 * @module 
 * Header (react component)
 *@description It returns a header with a logo and a Navigate component.
 * @returns A header with a logo and a Navigate component.
 */
export function Header(){
  return(
    <header className="containerHeader">
      <div className="logoImg">
        <img src={logo} alt="logo SportSee" className="logoSportSee"/></div>
      <Navigate/>
    </header>
  );
}
