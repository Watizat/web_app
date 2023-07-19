import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './components/App/App';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ForgottenPassword from './components/ForgottenPassword/ForgottenPassword';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import AccountRequest from './components/AccountRequest/AccountRequest';
import MentionsLegales from './components/MentionsLegales/MentionsLegales';
import Orientation from './components/Orientation/Orientation';
import Resultats from './components/Resultats/Resultats';
import AdminApp from './components/Admin/App/App';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Users from './components/Admin/Users/Users';
import Edition from './components/Admin/Edition/Edition';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/orientation" element={<Orientation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/account-request" element={<AccountRequest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Route>
      <Route path="/resultats" element={<Resultats />} />
      <Route path="/admin" element={<AdminApp />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/edition" element={<Edition />} />
      </Route>
    </>
  )
);

export default router;
