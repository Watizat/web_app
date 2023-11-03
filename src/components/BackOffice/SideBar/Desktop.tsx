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

export default function Desktop({ navigation, actions }: Props) {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:flex lg:flex-col lg:w-20 lg:overflow-y-auto lg:bg-watizat-500 lg:pb-4 ">
      <div className="flex items-center justify-center h-16 shrink-0">
        <img className="w-auto h-10" src={logo} alt="Watizat" />
      </div>
      <nav className="flex flex-col flex-1 mt-8">
        <ul className="flex flex-col justify-between flex-1">
          <li>
            <ul className="flex flex-col items-center flex-1 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold
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
                    <span className="sr-only">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="flex flex-col items-center mt-auto ">
            <ul>
              {actions.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={item.onclick}
                  className={`flex p-3  -mx-2 text-sm font-semibold leading-6 rounded-md group gap-x-3 ${
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
                </Link>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
