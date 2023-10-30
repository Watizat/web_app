import { Link } from 'react-router-dom';

const guidesPapiers = [
  {
    city: 'Paris',
    languages: 5,
    link: 'https://watizat.org/guides-paris/',
    picture:
      'https://unsplash.com/photos/nnzkZNYWHaU/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk4NjgzMzM4fA&force=true&w=640',
  },
  {
    city: 'Lyon',
    languages: 2,
    link: 'https://watizat.org/guides-lyon/',
    picture:
      'https://unsplash.com/photos/0PAnFTL3C8c/download?force=true&w=640',
  },
  {
    city: 'Toulouse',
    languages: 3,
    link: 'https://watizat.org/guides-toulouse/',
    picture:
      'https://unsplash.com/photos/F4u8Vm7UdgY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dG91bG91c2V8ZnJ8MHwwfHx8MTY5ODY4Mjc0OXww&force=true&w=640',
  },
  {
    city: 'Oise',
    languages: 1,
    link: 'https://watizat.org/guides-oise/',
    picture:
      'https://unsplash.com/photos/8pmc5QDsiaU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8b2lzZXxmcnwwfDB8fHwxNjk4NjgzMzU3fDA&force=true&w=640',
  },
];

export default function GuidesPapiers() {
  return (
    <div className="px-6 mx-auto mt-32 max-w-7xl lg:px-8">
      <div className="max-w-2xl mx-auto lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Guides papier
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Le guide existe aussi en version imprimée
        </p>
      </div>
      <div className="py-24 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 gap-6 -mx-6 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {guidesPapiers.map((guide) => (
              <Link
                key={guide.city}
                to={guide.link}
                target="_blank"
                className="relative px-6 overflow-hidden bg-gray-900 shadow-xl py-15 sm:rounded-3xl sm:px-10 sm:py-16 md:px-12 lg:px-20"
              >
                <img
                  className="absolute inset-0 object-cover w-full h-full "
                  src={guide.picture}
                  alt="{guide.city}"
                />
                <div className="absolute inset-0 bg-slate-600/70 mix-blend-multiply" />
                <div className="relative flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 text-white/90">
                  <h3 className="font-serif text-4xl font-semibold leading-6">
                    {guide.city}
                  </h3>
                  <figure>
                    <blockquote className="mt-6 text-sm font-semibold">
                      <p>{guide.languages}&nbsp;langues disponibles</p>
                    </blockquote>
                  </figure>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
