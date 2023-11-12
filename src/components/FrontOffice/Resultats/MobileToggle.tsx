interface MobileToogleProps {
  isMobileMap: boolean;
  setIsMobileMap: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileToggle({
  isMobileMap,
  setIsMobileMap,
}: MobileToogleProps) {
  return (
    <div className="absolute inset-x-0 z-50 flex justify-center bottom-2">
      {isMobileMap ? (
        <span className="inline-flex rounded-md shadow-sm isolate ">
          <button
            type="button"
            onClick={() => setIsMobileMap(false)}
            className="relative inline-flex items-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 rounded-2xl"
          >
            Liste des organismes
          </button>
        </span>
      ) : (
        <span className="inline-flex rounded-md shadow-sm isolate ">
          <button
            type="button"
            onClick={() => setIsMobileMap(true)}
            className="relative inline-flex items-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 rounded-2xl"
          >
            Carte des résultats
          </button>
        </span>
      )}
    </div>
  );
}
