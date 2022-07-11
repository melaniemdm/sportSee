import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Profil from '../pages/Profil';
import Reglage from '../pages/Reglage';
import Error from '../pages/Error';
import Communaute from '../pages/Communaute';
import Header from '../layout/Header';
import NavBarLeft from '../layout/NavBarLeft';
import "./style.scss";


/**
 * CustomsRoutes() is a function that returns a Router component that contains a Header component, a
 * NavBarLeft component, a Routes component that contains a Route component for each page of the app,
 * and an Error component.
 * @returns A React Router DOM Router component.
 */
function CustomsRoutes(){
  return (
    <Router>
      <Header />
      <main>
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
        <Route path="*" element={<Error />} />
      </Routes></main>
     
    </Router>
  );
}

export default CustomsRoutes;