import FrontColor from '../../../Container/FrontColor';
import mentions from './source';

function MentionsLegales() {
  return (
    <FrontColor>
      <div className="max-w-2xl px-6 pb-8 mx-auto divide-y divide-gray-900/10 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Mentions légales
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {mentions.map((subject) => (
            <div
              key={subject.title}
              className="pt-3 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                {subject.title}
              </dt>
              <dd className="mt-2 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  {subject.description}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </FrontColor>
  );
}

export default MentionsLegales;
