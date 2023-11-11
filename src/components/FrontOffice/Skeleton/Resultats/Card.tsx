export default function Card() {
  return (
    <li className="z-10 flex flex-col w-full list-none bg-white rounded-lg shadow-md select-none hover:shadow-lg hover:shadow-watizat-800/10 animate-pulse h-40">
      <div className="flex items-center justify-between w-full p-6 md:p-6">
        <div className="flex flex-col flex-1 truncate gap-y-2">
          <div className="flex items-center space-x-3">
            <p className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-semibold text-white align-middle rounded-full bg-gray-200"></p>
            <div className="flex justify-between flex-1">
              <div>
                <h3 className=" bg-gray-200 w-full h-2 flex-1">
                  {/* {organism.name} */}
                </h3>
                <p className="">
                  {/* {organism.address} */}
                </p>
              </div>
              {/* {organism.pmr && (
                <div>
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 rounded-md bg-blue-50 ring-1 ring-inset ring-blue-700/10">
                    Acessibilité PMR
                  </span>
                </div>
              )} */}
            </div>
          </div>
          <p className="">
            {/* {organism.translations[0]?.description?.length &&
            organism.translations[0]?.description?.length > 250
              ? `${organism.translations[0]?.description?.substring(
                  0,
                  250
                )} (.....)`
              : organism.translations[0]?.description} */}
          </p>
          <div className="flex pt-1 gap-x-4">
            {/* {uniqueCategoriesArray.map((categorie) => (
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
            ))} */}
          </div>
          {/* {organism.translations[0]?.infos_alerte && (
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
          )} */}
        </div>
      </div>

      <div className="w-full bg-gray-100  h-10">
      </div>
    </li>
  );
}
