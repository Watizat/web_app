import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { logout } from '../../store/reducers/user';
import Login from './Login';

export default function NewUser() {
  const dispatch = useAppDispatch();
  return (
    <Login>
      <div className="flex flex-col justify-center flex-1 mx-auto align-middle min-h-ful max-w-3/6">
        <div className="text-center">
          Votre demande de création de compte a bien été prise en compte <br />
        </div>
        <div className="mt-2 font-medium text-center">
          Votre compte est en attente de validation
        </div>
        <Link
          to="/"
          onClick={() => dispatch(logout())}
          className="mx-auto mt-6"
        >
          <button
            className="flex w-full justify-center rounded-md bg-watizat-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-watizat-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-watizat-500 "
            type="button"
          >
            Se déconnecter
          </button>
        </Link>
      </div>
    </Login>
  );
}
