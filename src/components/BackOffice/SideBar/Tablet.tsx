/* eslint-disable no-nested-ternary */
import { Link, useLocation } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useCallback } from 'react';

import {
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  PencilSquareIcon,
  LanguageIcon,
  PrinterIcon,
  ArrowPathIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';

import { useAppDispatch } from '../../../hooks/redux';
import { logout } from '../../../store/reducers/user';

import logo from '../../../assets/logo.svg';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
  active: boolean;
}

interface ActionItem {
  name: string;
  href: string;
  icon: React.ElementType;
  onclick: () => void;
}

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: NavigationItem[];
  actions: ActionItem[];
}

export default function Tablet({
  sidebarOpen,
  setSidebarOpen,
  navigation,
  actions,
}: Props) {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex flex-col px-6 pb-4 overflow-y-auto bg-watizat-500 grow gap-y-5">
                <Link to="/" className="flex items-center h-16 shrink-0">
                  <img className="w-auto h-10 mt-2" src={logo} alt="Watizat" />
                </Link>
                <nav className="flex flex-col flex-1">
                  <ul className="flex flex-col flex-1 gap-y-7">
                    <li>
                      <ul className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              onClick={() => setSidebarOpen(false)}
                              className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold py-3
                        ${
                          item.active === false
                            ? ' text-watizat-100/50 pointer-events-none'
                            : pathname === item.href
                            ? ' text-white bg-watizat-400/70'
                            : 'text-watizat-100 hover:text-white hover:bg-watizat-600'
                        } 
                        `}
                            >
                              <item.icon
                                className={`h-6 w-6 shrink-0 
                          ${
                            item.active === false
                              ? ' text-watizat-100/50 pointer-events-none'
                              : pathname === item.href
                              ? ' text-white '
                              : 'text-watizat-100 hover:text-white hover:bg-watizat-600'
                          } `}
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <ul>
                        {actions.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={item.onclick}
                            className={`flex p-2 py-3 -mx-2 text-sm font-semibold leading-6 rounded-md group gap-x-3 ${
                              pathname === item.href
                                ? ' text-white bg-watizat-400/60'
                                : 'text-watizat-100 hover:text-white hover:bg-watizat-600'
                            }`}
                          >
                            <item.icon
                              className={`w-6 h-6 text-watizat-100 shrink-0 group-hover:text-white ${
                                pathname === item.href
                                  ? 'text-white'
                                  : 'text-watizat-100 hover:text-white hover:bg-watizat-600'
                              }`}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
