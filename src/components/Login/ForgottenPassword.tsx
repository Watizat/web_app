import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  askPassword,
  changeLoginCredentialsField,
} from '../../store/reducers/user';
import Login from './Login';

export default function ForgottenPassword() {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.user.loginCredentials.email);
  const message = useAppSelector((state) => state.user.message);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeLoginCredentialsField({ field: 'email', value: event.target.value })
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(askPassword(email));
  };

  return (
    <Login>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
              className="w-auto h-16 mx-auto"
              src="https://watizat.org/wp-content/uploads/2022/04/logoSVG.svg"
              alt="Watizat logo"
            /> */}
          <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-center text-watizat-500">
            Mot de passé oublié
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-600"
              >
                Adresse email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  onChange={handleChange}
                  value={email}
                  placeholder="Email"
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-watizat-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-watizat-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-watizat-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-watizat-500"
              >
                Demander la réinitialisation
              </button>
              {message && (
                <p className="mt-6 text-xs font-medium text-center text-slate-500">
                  {message}
                </p>
              )}
            </div>
          </form>
          <p className="mt-10 text-sm text-center text-gray-500">
            Déjà membre ?<br />
            <Link
              to="/login"
              className="font-semibold leading-6 text-watizat-500 hover:text-watizat-400"
            >
              Se connecter
            </Link>
          </p>
          <p className="mt-4 text-sm text-center text-gray-500">
            Pas encore membre ?<br />
            <Link
              to="/account-request"
              className="font-semibold leading-6 text-watizat-500 hover:text-watizat-400"
            >
              Faire une demande de compte
            </Link>
          </p>
        </div>
      </div>
    </Login>
  );
}
