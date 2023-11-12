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

import Tablet from './SideTablet';
import Desktop from './SideDesktop';
import Widescreen from './SideWidescreen';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: Props) {
  const dispatch = useAppDispatch();

  const memoizedNavigation = useMemo(() => {
    return [
      {
        name: 'Dashboard',
        href: '/admin/dashboard',
        icon: HomeIcon,
        active: true,
        onclick: () => setSidebarOpen(false),
        devOnly: false,
        refLocalOnly: false,
      },
      {
        name: 'Edition',
        href: '/admin/edition',
        icon: PencilSquareIcon,
        active: true,
        onclick: () => setSidebarOpen(false),
        devOnly: false,
        refLocalOnly: false,
      },
      {
        name: 'Traduction',
        href: '/admin/translate',
        icon: LanguageIcon,
        active: false,
        onclick: () => setSidebarOpen(false),
        devOnly: false,
        refLocalOnly: false,
      },
      {
        name: 'Print',
        href: '/admin/print',
        icon: PrinterIcon,
        active: false,
        onclick: () => setSidebarOpen(false),
        devOnly: false,
        refLocalOnly: false,
      },
      {
        name: 'Actualisation',
        href: '/admin/actualisation',
        icon: ArrowPathIcon,
        active: false,
        onclick: () => setSidebarOpen(false),
        devOnly: false,
        refLocalOnly: false,
      },
      {
        name: 'Utilisateur·ice·s',
        href: '/admin/users',
        icon: UsersIcon,
        active: true,
        onclick: () => setSidebarOpen(false),
        devOnly: false,
        refLocalOnly: true,
      },
      {
        name: 'Back-end',
        href: 'https://watizat.lunalink.nl/',
        target: '_blank',
        icon: CircleStackIcon,
        active: true,
        onclick: () => setSidebarOpen(false),
        devOnly: true,
        refLocalOnly: false,
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
        href: '/admin/profil',
        icon: UserCircleIcon,
        active: true,
        onclick: () => setSidebarOpen(false),
      },
      {
        name: 'Déconnexion',
        href: '/',
        icon: ArrowRightOnRectangleIcon,
        active: true,
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
