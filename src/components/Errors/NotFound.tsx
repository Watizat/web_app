import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';

export default function NotFound() {
  return (
    <main className="min-h-full ">
      <ProgressiveImage
        src="https://unsplash.com/photos/i9rzrKo5Vao/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk4NjEyNzk0fA&force=true"
        placeholder="https://unsplash.com/photos/i9rzrKo5Vao/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk4NjEyNzk0fA&force=true&w=160"
      >
        {(src, loading) => (
          <img
            className={`image${
              loading ? ' loading' : ' loaded'
            } absolute inset-0 object-cover object-top w-full h-full -z-10`}
            src={src}
            alt="Syrian refugee camp"
          />
        )}
      </ProgressiveImage>

      <div className="px-6 py-32 mx-auto text-center max-w-7xl sm:py-40 lg:px-8">
        <p className="text-xl font-semibold leading-8 text-white">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Cette page est introuvable
        </h1>
        <p className="mt-4 text-base text-slate-100 sm:mt-6">
          Tout comme la politique humaniste de ce gouvernement...
        </p>
        <div className="flex justify-center mt-10">
          <Link to="/" className="text-sm font-semibold leading-7 text-white">
            <span aria-hidden="true">&larr;</span> Retourner à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
