import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Accueil } from '../pages/Accueil';
import { Profil } from '../pages/Profil';
import { Reglage } from '../pages/Reglage';
import { Error } from '../pages/Error';
import { Communaute } from '../pages/Communaute';
import { Header } from '../layout/Header';
import { NavBarLeft } from '../layout/NavBarLeft';
import './style.scss';

/**
 * @function
 * CustomsRoutes (react component)
 * @description It's a function that returns a Router component that contains a Header component, a main component
 * that contains a NavBarLeft component and a Routes component that contains a Route component that
 * contains an Accueil component, a Route component that contains a Profil component, a Route component
 * that contains a Reglage component, a Route component that contains a Communaute component and a
 * Route component that contains an Error component.
 * @returns A React Router.
 */

export default function CustomsRoutes(){
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