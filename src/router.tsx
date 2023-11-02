import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Account from './components/Admin/Account/Account';
import AdminApp from './components/App/BackOffice';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Edition from './components/Admin/Edition/Edition';
import Users from './components/Admin/Users/Users';
import App from './components/App/FrontOffice';
import NotFound from './components/Errors/NotFound';
import Home from './components/FrontOffice/Home/Home';
import InactivityDetector from './components/InactivityDetector/InactivityDetector';
import AccountRequest from './components/FrontOffice/Login/AccountRequest';
import ForgottenPassword from './components/FrontOffice/Login/ForgottenPassword';
import SignIn from './components/FrontOffice/Login/SignIn';
import NewUser from './components/FrontOffice/Login/NewUser';
import RecoverPassword from './components/FrontOffice/Login/RecoverPassword';
import MentionsLegales from './components/FrontOffice/StaticsPages/MentionsLegales/MentionsLegales';
import Organisme from './components/FrontOffice/Organisme/Organisme';
import Orientation from './components/FrontOffice/Orientation/Orientation';
import Resultats from './components/FrontOffice/Resultats/Resultats';
import GuidesPapier from './components/FrontOffice/StaticsPages/GuidesPapier/GuidesPapier';

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
        <Route path="/guides-papier" element={<GuidesPapier />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/new-user" element={<NewUser />} />
      </Route>
      <Route path="/resultats" element={<Resultats />} />
      <Route path="/organisme/:slug" element={<Organisme />} />
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
