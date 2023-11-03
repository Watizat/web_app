/* eslint-disable no-nested-ternary */
import { Link, useLocation } from 'react-router-dom';
import React, { useCallback } from 'react';

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
  navigation: NavigationItem[];
  actions: ActionItem[];
}

export default function Widescreen({ navigation, actions }: Props) {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="hidden select-none 2xl:fixed 2xl:inset-y-0 2xl:z-50 2xl:flex 2xl:w-72 2xl:flex-col">
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
            <li className="mt-auto ">
              <ul className="flex flex-col gap-y-2">
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
    </div>
  );
}
