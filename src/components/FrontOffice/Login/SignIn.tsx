import { ChangeEvent, FormEvent } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { KeyOfloginCredentials } from '../../../@types/user';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  changeLoginCredentialsField,
  login,
} from '../../../store/reducers/user';
import { getUserDataFromLocalStorage } from '../../../utils/user';

import Login from './Login';

export default function SignIn() {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.user.loginCredentials.email);
  const password = useAppSelector(
    (state) => state.user.loginCredentials.password
  );
  const user = getUserDataFromLocalStorage();
  const error = useAppSelector((state) => state.user.error);

  const handleChangeField =
    (field: KeyOfloginCredentials) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        changeLoginCredentialsField({ field, value: event.target.value })
      );
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(login({ email, password }));
  };

  if (user) {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <Login>
      <div className="flex flex-col flex-1">
        <div className="w-full max-w-sm mx-auto">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-center text-slate-700">
            Se connecter
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
                  placeholder="Email"
                  onChange={handleChangeField('email')}
                  value={email}
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-watizat-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold leading-6 text-gray-600"
                >
                  Mot de passe
                </label>
                <div className="text-sm">
                  <Link
                    to="/forgotten-password"
                    className="text-sm font-semibold text-watizat-400 hover:text-watizat-300"
                  >
                    Mot de passe oublié
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Mot de passe"
                  onChange={handleChangeField('password')}
                  value={password}
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-watizat-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {error && (
              <p className="text-sm text-center text-red-500">{error}</p>
            )}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-watizat-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-watizat-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-watizat-500"
              >
                Se connecter
              </button>
            </div>
          </form>
          <p className="mt-10 text-sm text-center text-gray-500">
            Pas encore membre ?<br />
            <Link
              to="/account-request"
              className="font-semibold leading-6 text-watizat-500 hover:text-watizat-400"
            >
              Faire une demande de création de compte
            </Link>
          </p>
        </div>
      </div>
    </Login>
  );
}
