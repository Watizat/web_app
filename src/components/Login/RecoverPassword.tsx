import Login from './Login';

export default function RecoverPassword() {
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
            Réinitialisation du mot de passe
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-600"
              >
                Nouveau mot de passe
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Email"
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
                  Confirmation du nouveau mot de passe
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Mot de passe"
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-watizat-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-watizat-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-watizat-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-watizat-500"
              >
                Confirmer la réinitialisation
              </button>
            </div>
          </form>
        </div>
      </div>
    </Login>
  );
}
