interface SearchProps {
  searchInputValue: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({
  searchInputValue,
  handleSearch,
}: SearchProps) {
  return (
    <div className="px-4 space-y-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
      <div>
        <label
          htmlFor="project-name"
          className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
        >
          Par nom
        </label>
      </div>
      <div className="sm:col-span-2">
        <input
          type="text"
          placeholder="Recherchez un organisme..."
          id="search-panel"
          value={searchInputValue}
          onChange={handleSearch}
          className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-watizat-500 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
