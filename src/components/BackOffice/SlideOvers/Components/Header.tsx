import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
  title: string;
  setOpenSlide: (open: boolean) => void;
}

export default function Header({ title, setOpenSlide }: Props) {
  return (
    <div className="h-16 px-4 py-6 bg-gray-50 sm:px-6">
      <div className="flex items-center justify-between">
        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
          {title}
        </Dialog.Title>
        <div className="flex items-center ml-3 h-7">
          <button
            type="button"
            className="relative text-gray-400 hover:text-gray-500"
            onClick={() => setOpenSlide(false)}
          >
            <span className="absolute -inset-2.5" />
            <span className="sr-only">Close panel</span>
            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
