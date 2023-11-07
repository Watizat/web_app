interface OthersProps {
  handleAnimals: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Others({ handleAnimals }: OthersProps) {
  return (
    <div className="px-4 space-y-2 select-none sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
      <div>
        <label
          htmlFor="project-description"
          className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
        >
          Autres filtres
        </label>
      </div>
      <div className="sm:col-span-2">
        <legend className="sr-only">Notifications</legend>
        <div className="space-y-5">
          <div className="relative flex items-start">
            <div className="flex items-center h-6">
              <input
                aria-describedby="animals-filter"
                type="checkbox"
                name="animals"
                onChange={(event) => handleAnimals(event)}
                className="w-4 h-4 border-gray-300 rounded text-watizat-600 focus:ring-watizat-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="candidates" className="font-medium text-gray-900">
                Animaux
              </label>
              <p id="candidates-description" className="text-gray-500">
                Animaux acceptés
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
