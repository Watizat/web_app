import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, PlusIcon } from '@heroicons/react/20/solid';
import { Organism } from '../../../@types/organism';
import Icon from '../../../ui/icon/icon';

interface OrganismProps {
  organism: Organism;
  map_id: number;
  categoryFilter: string[];
}

interface Categories {
  id: number;
  value: string;
  name: string;
  isCheck: boolean;
}

function Card({ organism, map_id, categoryFilter }: OrganismProps) {
  const { services } = organism;

  const categoriesTagName = [
    ...new Set(
      services.map((service) => {
        return {
          name: service.categorie_id.translations[0].name,
          tag: service.categorie_id.tag,
        };
      })
    ),
  ].sort();

  const categories = categoriesTagName.map((tag, index) => ({
    id: index + 1,
    value: tag.tag,
    name: tag.name,
    isCheck: categoryFilter.includes(tag.tag),
  }));

  const uniqueCategories: { [key: string]: Categories } = {};

  categories.forEach((obj) => {
    if (!uniqueCategories[obj.name]) {
      uniqueCategories[obj.name] = obj;
    }
  });

  const uniqueCategoriesArray = Object.values(uniqueCategories);

  return (
    <li className="flex flex-col items-center col-span-1 list-none">
      <div className="z-10 col-span-1 list-none bg-white divide-y divide-gray-200 rounded-lg shadow-md hover:shadow-lg hover:shadow-watizat-800/10">
        <div className="flex items-center justify-between w-full p-6 space-x-6">
          <div className="flex flex-col flex-1 truncate gap-y-2">
            <div className="flex items-center space-x-3">
              <p className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-semibold text-white align-middle rounded-full bg-watizat-500/90">
                {map_id}
              </p>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 truncate">
                  {organism.name}
                </h3>
                <p className="text-sm font-semibold truncate text-cyan-700/80">
                  {organism.address}
                </p>
              </div>
            </div>
            <p className="text-sm whitespace-normal text-slate-700 font-base">
              {organism.translations[0]?.description?.length &&
              organism.translations[0]?.description?.length > 250
                ? `${organism.translations[0]?.description?.substring(
                    0,
                    250
                  )} (.....)`
                : organism.translations[0]?.description}
            </p>
            <div className="flex pt-1 gap-x-4">
              {uniqueCategoriesArray.map((categorie) => (
                <div className="has-tooltip" key={categorie.id}>
                  <Icon
                    className="w-6 h-6 text-slate-500/80"
                    icon={categorie.value}
                  />
                  <span
                    id="tooltip-default"
                    role="tooltip"
                    className="absolute inline-block px-3 py-2 mt-8 -ml-10 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-sm bg-zinc-800/70 tooltip"
                  >
                    {categorie.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex -mt-px divide-x divide-gray-200">
          {organism.phone && (
            <div className="flex flex-1 w-0 -ml-px">
              <Link
                to={`tel:${organism.phone}`}
                className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-semibold border border-transparent rounded-br-lg text-slate-600 gap-x-3"
              >
                <PhoneIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                {organism.phone}
              </Link>
            </div>
          )}
          <div className="flex flex-1 w-0">
            <Link
              to={`mailto:${organism.mail}`}
              className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-semibold text-gray-900 border border-transparent rounded-bl-lg gap-x-3"
            >
              <MapPinIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              Aller vers
            </Link>
          </div>
          <div className="flex flex-1 w-0 -ml-px">
            <Link
              to={`/organisme/${organism.slug}`}
              className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-semibold text-gray-900 border border-transparent rounded-br-lg gap-x-3"
            >
              <PlusIcon className="w-5 h-5 text-cyan-600" aria-hidden="true" />
              <span className="text-cyan-600">En savoir plus</span>
            </Link>
          </div>
        </div>
      </div>
      {organism.translations[0]?.infos_alerte && (
        <div className="w-11/12 pt-8 -mt-10 list-none bg-white divide-y rounded-lg shadow-md shadow-watizat-600/10 pt-col-span-1">
          <div className="flex items-center justify-between w-full p-4 space-x-6">
            <div className="flex flex-col flex-1 truncate ">
              <p className="text-sm font-semibold whitespace-normal text-watizat-600/80">
                Infos & alertes
              </p>
              <p className="text-sm whitespace-normal text-slate-700 font-base">
                {organism.translations[0]?.infos_alerte}
              </p>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

export default Card;
