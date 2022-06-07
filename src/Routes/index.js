import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Profil from '../pages/Profil';
import Reglage from '../pages/Reglage';
import Communaute from '../pages/Communaute';
import Header from '../layout/Header';
import NavBarLeft from '../layout/NavBarLeft';

function CustomsRoutes(){
  return (
    <Router>
      <Header />
      <NavBarLeft/>
      <Routes>
        <Route exact path=" " element={<Accueil />} />
        <Route exact path="/ " element={<Accueil />} />
        <Route exact path="/profil" element={<Profil />} />
        <Route exact path="/ " element={<Reglage />} />
        <Route exact path="/ " element={<Communaute />} />
      </Routes>
     
    </Router>
  );
}

export default CustomsRoutes;