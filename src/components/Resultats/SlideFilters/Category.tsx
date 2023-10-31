import Icon from '../../../ui/icon/icon';

interface CategoryProps {
  categories: {
    tag: string;
    translations: { name: string; slug: string }[];
  }[];
  activeCategories: string[];
  categoryFilter: string[];
  categoryParams: string;
  handleCategoryChange: (tag: string) => void;
}

export default function Category({
  categories,
  activeCategories,
  categoryFilter,
  categoryParams,
  handleCategoryChange,
}: CategoryProps) {
  return (
    <div className="px-4 space-y-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
      <div>
        <label
          htmlFor="project-description"
          className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
        >
          Filtrer par catégorie
        </label>
      </div>
      <div className="grid grid-cols-2 sm:col-span-2">
        {categories.map((category, index) => {
          return (
            <label
              key={category.tag}
              className={`flex flex-col items-center justify-center py-2 px-8 border border-gray-200 h-50  ${
                categoryFilter.includes(category.tag) &&
                'font-normal bg-watizat-100/50 text-watizat-500'
              } ${
                !activeCategories.includes(category.tag) &&
                'bg-zinc-100/50 cursor-not-allowed'
              }       
                                    ${index === 0 && 'rounded-tl-lg'}  ${
                index === 1 && 'rounded-tr-lg'
              } ${index === categories.length - 2 && 'rounded-br-lg'} ${
                index === categories.length - 1 && 'rounded-bl-lg'
              }`}
            >
              <input
                type="checkbox"
                defaultChecked={categoryParams === category.tag}
                name={category.translations[0].slug}
                onChange={() => handleCategoryChange(category.tag)}
                disabled={!activeCategories.includes(category.tag)}
                className="hidden"
              />
              <Icon
                icon={category.tag}
                className={`w-5 aspect-square ${
                  categoryFilter.includes(category.tag)
                    ? 'text-watizat-500'
                    : ' text-zinc-500'
                }  `}
              />
              <span className="text-center">
                {category.translations[0].name}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
