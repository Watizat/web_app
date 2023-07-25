import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AccountRequest from './components/AccountRequest/AccountRequest';
import AdminApp from './components/Admin/App/App';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Edition from './components/Admin/Edition/Edition';
import Users from './components/Admin/Users/Users';
import App from './components/App/App';
import Contact from './components/Contact/Contact';
import ForgottenPassword from './components/ForgottenPassword/ForgottenPassword';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MentionsLegales from './components/MentionsLegales/MentionsLegales';
import Organisme from './components/Organisme/Organisme';
import Orientation from './components/Orientation/Orientation';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import Resultats from './components/Resultats/Resultats';
import LogginControl from './components/Admin/Loggincontrol/LoggingControl';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/orientation" element={<Orientation />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/account-request" element={<AccountRequest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/organisme/:slug" element={<Organisme />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/resultats" element={<Resultats />} />
      <Route path="/admin" element={<AdminApp />} errorElement={<App />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/edition" element={<Edition />} />
      </Route>
    </>
  )
);

export default router;
