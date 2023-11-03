/* eslint-disable no-nested-ternary */
import { useMemo } from 'react';
import {
  HomeIcon,
  UsersIcon,
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

import Tablet from './Tablet';
import Desktop from './Desktop';
import Widescreen from './Widescreen';

interface SideBarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SideBarProps) {
  const dispatch = useAppDispatch();

  const memoizedNavigation = useMemo(() => {
    return [
      {
        name: 'Dashboard',
        href: '/admin/dashboard',
        icon: HomeIcon,
        active: true,
        onclick: () => setSidebarOpen(false),
      },
      {
        name: 'Edition',
        href: '/admin/edition',
        icon: PencilSquareIcon,
        active: true,
        onclick: () => setSidebarOpen(false),
      },
      {
        name: 'Traduction',
        href: '/admin/translate',
        icon: LanguageIcon,
        active: false,
        onclick: () => setSidebarOpen(false),
      },
      {
        name: 'Print',
        href: '/admin/print',
        icon: PrinterIcon,
        active: false,
        onclick: () => setSidebarOpen(false),
      },
      {
        name: 'Actualisation',
        href: '/admin/actualisation',
        icon: ArrowPathIcon,
        active: false,
        onclick: () => setSidebarOpen(false),
      },
      {
        name: 'Utilisateur·ice·s',
        href: '/admin/users',
        icon: UsersIcon,
        active: true,
        onclick: () => setSidebarOpen(false),
      },
      {
        name: 'Back-end',
        href: 'https://watizat.lunalink.nl/',
        target: '_blank',
        icon: CircleStackIcon,
        active: true,
      },
    ];
  }, [setSidebarOpen]);

  const memoizedActions = useMemo(() => {
    const handleLogout = () => {
      dispatch(logout());
    };

    return [
      {
        name: 'Mon profil',
        href: '/admin/account',
        icon: UserCircleIcon,
        onclick: () => setSidebarOpen(false),
      },
      {
        name: 'Déconnexion',
        href: '/',
        icon: ArrowRightOnRectangleIcon,
        onclick: handleLogout,
      },
    ];
  }, [dispatch, setSidebarOpen]);

  return (
    <>
      <Tablet
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigation={memoizedNavigation}
        actions={memoizedActions}
      />
      <Desktop navigation={memoizedNavigation} actions={memoizedActions} />
      <Widescreen navigation={memoizedNavigation} actions={memoizedActions} />
    </>
  );
}
