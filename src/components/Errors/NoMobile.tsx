import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';

export default function NoMobile() {
  return (
    <main className="z-50 flex flex-col items-center justify-center h-full max-h-full">
      <ProgressiveImage
        src="https://unsplash.com/photos/6aj0lLAxPQo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjE3fHxsb3N0fGVufDB8MXx8fDE2OTg2MTU4Mjh8MA&force=true"
        placeholder="https://unsplash.com/photos/fN0y5YHkYAc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTR8fGxvc3R8ZW58MHwxfHx8MTY5ODYxNTY5M3ww&force=true&w=160"
      >
        {(src, loading) => (
          <img
            className={`image${
              loading ? ' loading' : ' loaded'
            } absolute inset-0 object-cover object-top w-full h-full -z-10 `}
            src={src}
            alt="Robot"
          />
        )}
      </ProgressiveImage>

      <div className="px-10 py-32 mx-auto text-center max-w-7xl sm:py-40 lg:px-8">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100">
          Consultation impossible
        </h1>
        <p className="mt-10 text-base text-gray-100 sm:mt-6">
          Cet espace n&apos;est pas adapté pour une consultation depuis un
          smartphone
          <br />
          <br /> Merci de bien vouloir le consulter à nouveau depuis une
          tablette ou ordinateur
          <br />
          <br /> Promis, ceci n&apos;est pas un caprice de dévellopeur.se 🤪
        </p>
        <div className="flex justify-center mt-10">
          <Link
            to="/"
            className="text-sm font-semibold leading-7 text-gray-100"
          >
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold text-gray-900 rounded-md shadow-sm bg-white/90 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Retourner à l&apos;accueil
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
