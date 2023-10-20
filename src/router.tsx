import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Account from './components/Admin/Account/Account';
import AdminApp from './components/Admin/App/App';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Edition from './components/Admin/Edition/Edition';
import Users from './components/Admin/Users/Users';
import App from './components/App/App';
import NotFound from './components/Errors/NotFound/NotFound';
import Home from './components/Home/Home';
import InactivityDetector from './components/InactivityDetector/InactivityDetector';
import AccountRequest from './components/Login/AccountRequest';
import ForgottenPassword from './components/Login/ForgottenPassword';
import Login from './components/Login/Login';
import NewUser from './components/Login/NewUser';
import RecoverPassword from './components/Login/RecoverPassword';
import MentionsLegales from './components/StaticsPages/MentionsLegales';
import Organisme from './components/Organisme/Organisme';
import Orientation from './components/Orientation/Orientation';
import Resultats from './components/Resultats/Resultats';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<InactivityDetector />}>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/orientation" element={<Orientation />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/account-request" element={<AccountRequest />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/organisme/:slug" element={<Organisme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-user" element={<NewUser />} />
      </Route>
      <Route path="/resultats" element={<Resultats />} />
      <Route path="/admin" element={<AdminApp />} errorElement={<App />}>
        <Route path="/admin/account" element={<Account />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/edition" element={<Edition />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
