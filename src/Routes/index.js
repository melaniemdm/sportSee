import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Profil from '../pages/Profil';
import Reglage from '../pages/Reglage';
import Communaute from '../pages/Communaute';
import Header from '../layout/Header';
import NavBarLeft from '../layout/NavBarLeft';
import './style.scss';

/* A function that returns a Router component. */
function CustomsRoutes(){
  return (
    <Router>
      <Header />
      <div className="test">
      <NavBarLeft/>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/accueil" element={<Accueil />} />
        <Route exact path="/profil/:id" element={<Profil />} />
        <Route exact path="/profil/:id/activities" element={<Profil />} />
        <Route exact path="/profil/:id/today-score" element={<Profil />} />
        <Route exact path="/profil/:id/key-data" element={<Profil />} />
        <Route exact path="/reglage" element={<Reglage />} />
        <Route exact path="communaute" element={<Communaute />} />
      </Routes></div>
     
    </Router>
  );
}

export default CustomsRoutes;