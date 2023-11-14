import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';
import antennes from './source';
import FrontColor from '../../../Container/FrontColor';

export default function GuidesPapier() {
  return (
    <FrontColor>
      <section className="flex flex-col items-center justify-end gap-8 px-6 mx-auto align-middle h-fullScreenHeight lg:gap-20 max-w-7xl lg:px-8">
        <div className="flex flex-col max-w-2xl gap-6 mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Guides papier
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Le guide existe aussi en version imprimée et pdf
          </p>
        </div>
        <div className="px-6 mx-auto bg-transparent max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 gap-6 -mx-6 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {antennes.map((guide) => (
              <Link
                key={guide.city}
                to={guide.link}
                target="_blank"
                className="relative px-1 overflow-hidden shadow-xl bg-gray-600/20 py-15 rounded-2xl sm:rounded-3xl sm:px-10 sm:py-10 group"
              >
                <ProgressiveImage
                  src={`${guide.picture}&w=320`}
                  placeholder={`${guide.picture}&w=20`}
                >
                  {(src, loading) => (
                    <img
                      className={`image${
                        loading ? ' loading' : ' loaded'
                      } absolute inset-0 object-cover object-top w-full h-full -z-10`}
                      src={src}
                      alt={guide.city}
                    />
                  )}
                </ProgressiveImage>
                <div className="absolute inset-0 bg-slate-600/70 mix-blend-multiply group-hover:bg-slate-400/50" />
                <div className="relative flex flex-col justify-center max-w-2xl p-4 mx-auto md:p-0 lg:mx-0 text-white/90">
                  <h3 className="font-serif text-lg font-semibold leading-6 md:text-4xl">
                    {guide.city}
                  </h3>
                  <figure>
                    <blockquote className="mt-2 text-xs font-semibold md:text-base md:mt-6">
                      <p>{guide.languages}&nbsp;langues disponibles</p>
                    </blockquote>
                  </figure>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </FrontColor>
  );
}
