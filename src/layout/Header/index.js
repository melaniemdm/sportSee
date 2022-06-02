import './style.scss';
import logo from '../../assets/logo.png';
import Navigate from '../../components/Navigate';


function Header(){
    return(
        <header className="containerHeader">
            <div className="logoImg">
<img src={logo} alt="logo SportSee" /></div>
<Navigate/>
        </header>
    )
}
export default Header