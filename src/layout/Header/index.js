import './style.scss';
import logo from '../../assets/logo.png';
import Navigate from '../Navigate';


function Header(){
    return(
        <div>
<img src={logo} alt="logo SportSee" />
<Navigate/>
        </div>
    )
}
export default Header