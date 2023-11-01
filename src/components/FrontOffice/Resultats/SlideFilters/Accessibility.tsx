interface AccessibilityProps {
  handlePmr: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Accessibility({ handlePmr }: AccessibilityProps) {
  return (
    <div className="px-4 space-y-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
      <div>
        <label
          htmlFor="project-description"
          className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
        >
          Par accessibilité
        </label>
      </div>
      <div className="sm:col-span-2">
        <legend className="sr-only">Notifications</legend>
        <div className="space-y-5">
          <div className="relative flex items-start">
            <div className="flex items-center h-6">
              <input
                aria-describedby="pmr-filter"
                type="checkbox"
                name="pmr"
                onChange={(event) => handlePmr(event)}
                className="w-4 h-4 border-gray-300 rounded text-watizat-600 focus:ring-watizat-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                Handicap
              </label>
              <p id="comments-description" className="text-gray-500">
                Accessibilité PSH / PMR vérifiée
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
