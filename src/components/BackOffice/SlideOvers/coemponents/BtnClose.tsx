interface Props {
  handleCloseSlide: () => void;
}

export default function BtnClose({ handleCloseSlide }: Props) {
  return (
    <div className="flex justify-start flex-shrink-0 px-4 py-4">
      <button
        type="button"
        onClick={handleCloseSlide}
        className="px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Fermer
      </button>
    </div>
  );
}
