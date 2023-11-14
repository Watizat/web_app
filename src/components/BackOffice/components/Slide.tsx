import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface Props {
  children: React.ReactNode;
  isOpenSlide: boolean;
  setIsOpenSlide: (open: boolean) => void;
  // eslint-disable-next-line react/require-default-props
  slideWidth?: string; // Notez le ? pour indiquer que c'est optionnel
}

export default function Slide({
  children,
  isOpenSlide,
  setIsOpenSlide,
  slideWidth = 'max-w-md' as string, // Définissez la valeur par défaut ici
}: Props) {
  return (
    <Transition.Root show={isOpenSlide} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpenSlide}>
        <div className="fixed inset-0 bg-gray-400/50" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-600"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-400"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel
                  className={`w-screen  pointer-events-auto ${slideWidth}`}
                >
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
