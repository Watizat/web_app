import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/20/solid';
import { Organism } from '../../../../@types/organism';
import Icon from '../../../../ui/icon/icon';

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
    <li className="z-10 flex flex-col w-full list-none bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-watizat-800/10">
      <div className="flex items-center justify-between w-full p-6 md:p-6">
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
          <p className="text-sm text-justify whitespace-normal text-slate-700 font-base">
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
          {organism.translations[0]?.infos_alerte && (
            <div className="flex px-4 pt-1 pb-5 mt-1 -mb-3 rounded-md bg-red-50/80">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationTriangleIcon
                    className="w-5 h-5 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col ml-3">
                  <h3 className="text-sm font-semibold text-yellow-800">
                    Infos / alertes
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-tight text-yellow-800 truncate whitespace-normal lg:leading-tight">
                    {organism.translations[0]?.infos_alerte}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid border-t grid-col-2 md:grid-col-3 md:divide-x md:divide-y-0">
        <div className="flex flex-1 w-full lg:col-start-1">
          <Link
            to={`https://www.google.com/maps/search/?api=1&query=${organism.latitude}%2C${organism.longitude}`}
            target="_blank"
            className="relative inline-flex items-center justify-center flex-1 w-0 py-2 text-sm font-semibold text-gray-900 border-transparent rounded-br-lg lg:py-3 gap-x-3"
          >
            <MapPinIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            Aller vers
          </Link>
        </div>
        {organism.phone && (
          <div className="flex flex-1 w-full border-l md:col-start-2">
            <Link
              to={`tel:${organism.phone}`}
              className="relative inline-flex items-center justify-center flex-1 w-0 py-2 text-sm font-semibold text-gray-900 border border-transparent rounded-br-lg lg:py-3 gap-x-3"
            >
              <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              {organism.phone}
            </Link>
          </div>
        )}
        <div className="flex items-center justify-center flex-1 w-full col-span-2 border-t md:col-auto md:col-start-3">
          <Link
            to={`/organisme/${organism.slug}`}
            className="relative inline-flex items-center justify-center flex-1 w-0 py-2 text-sm font-semibold text-gray-900 border border-transparent rounded-br-lg lg:py-3 gap-x-3"
          >
            <PlusIcon className="w-5 h-5 text-cyan-600" aria-hidden="true" />
            <span className="text-cyan-600">En savoir plus</span>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default Card;
