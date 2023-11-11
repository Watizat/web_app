import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

interface Props {
  menuChoices: {
    title: string;
    to?: string;
    onClick?: () => void;
  }[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function VerticalMenu({ menuChoices }: Props) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="block p-3 -m-3">
        <span className="sr-only">More</span>
        <EllipsisVerticalIcon
          className="w-4 h-auto text-gray-500"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          {menuChoices.map((choice) =>
            choice.to ? (
              <Menu.Item key={choice.title}>
                {({ active }) => (
                  <Link
                    to={choice.to || ''}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex justify-between px-4 py-2 text-sm w-full'
                    )}
                  >
                    <span>{choice.title}</span>
                  </Link>
                )}
              </Menu.Item>
            ) : (
              <Menu.Item key={choice.title}>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={choice.onClick}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex justify-between px-4 py-2 text-sm w-full'
                    )}
                  >
                    <span>{choice.title}</span>
                  </button>
                )}
              </Menu.Item>
            )
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
