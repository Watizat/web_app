import { ChangeEvent, useEffect, useState, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeCity, logout } from '../../store/reducers/user';
import { fetchZones } from '../../store/reducers/admin';
import { DirectusUser } from '../../@types/user';
import { axiosInstance } from '../../utils/axios';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
interface TopBarProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TopBar({ setSidebarOpen }: TopBarProps) {
  const [select, setSelect] = useState(localStorage.getItem('city') || '');
  const isAdmin = useAppSelector((state) => state.user.isAdmin);
  const dispatch = useAppDispatch();
  const zones = useAppSelector((state) => state.admin.zones);
  const [me, setMe] = useState<DirectusUser | null>(null);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('city', event.target.value);
    setSelect(event.target.value);
    dispatch(changeCity(event.target.value));
  };

  useEffect(() => {
    async function getUserInfos() {
      const { data } = await axiosInstance.get('/users/me');
      setMe(data.data);
    }
    getUserInfos();
    dispatch(fetchZones());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchZones());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const actions = [
    {
      name: 'Mon profil',
      href: '/admin/profil',
      onclick: () => {}, // Fonction vide pour éviter le warning
    },
    {
      name: 'Déconnexion',
      href: '/',
      onclick: handleLogout,
    },
  ];

  if (!me) {
    return <div>Pas d&apos;infos</div>;
  }

  return (
    <div className="sticky top-0 z-40 flex items-center h-16 px-4 bg-white border-b border-gray-200 shadow-sm shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="w-px h-6 bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex items-center self-stretch justify-end flex-1 gap-x-4 lg:gap-x-6">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* City select */}
          <div>
            <select
              value={select}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200/80 focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white  hover:bg-white disabled:cursor-not-allowed"
              disabled={!isAdmin}
            >
              <option value="" disabled className="">
                Selectionner une ville
              </option>
              {zones.map((zone) => (
                <option key={zone.id} value={zone.name}>
                  {zone.name}
                </option>
              ))}
            </select>
          </div>
          {/* Separator */}
          <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            aria-hidden="true"
          />
          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full bg-gray-50"
                src="https://source.boringavatars.com/beam?colors=ff8482,ffb294,f8d8a5,91be95,635a49"
                alt=""
              />
              <span className="hidden lg:flex lg:items-center">
                <span
                  className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                  aria-hidden="true"
                >
                  {me.first_name || ''} {me.last_name || ''}
                </span>
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 text-gray-400"
                  aria-hidden="true"
                />
              </span>
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
              <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                {actions.map((action) => (
                  <Menu.Item key={action.name}>
                    {({ active }) => (
                      <Link
                        to={action.href}
                        onClick={action.onclick}
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        {action.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
