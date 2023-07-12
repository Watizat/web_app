import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './components/App/App';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MentionsLegales from './components/MentionsLegales/MentionsLegales';
import Orientation from './components/Orientation/Orientation';
import Resultats from './components/Resultats/Resultats';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/orientation" element={<Orientation />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Route>
      <Route path="/resultats" element={<Resultats />} />
    </>
  )
);

export default router;
