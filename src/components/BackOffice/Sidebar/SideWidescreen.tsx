import { Link, useLocation } from 'react-router-dom';
import LinkLarge from './LinkLarge';
import logo from '../../../assets/logo.svg';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
  active: boolean;
  devOnly: boolean;
  refLocalOnly: boolean;
}

interface ActionItem {
  name: string;
  href?: string;
  icon: React.ElementType;
  active: boolean;
  onclick: () => void;
}

interface Props {
  navigation: NavigationItem[];
  actions: ActionItem[];
}

export default function Widescreen({ navigation, actions }: Props) {
  const { pathname } = useLocation();

  return (
    <div
      className={
        pathname === '/admin/dashboard'
          ? 'hidden'
          : 'hidden select-none 2xl:fixed 2xl:inset-y-0 2xl:z-50 2xl:flex 2xl:w-72 2xl:flex-col'
      }
    >
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-col px-6 pb-4 overflow-y-auto bg-watizat-500 grow gap-y-5">
        <div className="flex items-center h-16 shrink-0">
          <Link to="/">
            <img className="w-auto h-10 mt-2" src={logo} alt="Watizat" />
          </Link>
        </div>
        <nav className="flex flex-col flex-1">
          <ul className="flex flex-col flex-1 gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <LinkLarge
                    key={item.name}
                    item={{ ...item, onclick: () => {} }}
                  />
                ))}
              </ul>
            </li>
            <li className="mt-auto ">
              <ul className="flex flex-col gap-y-2">
                {actions.map((item) => (
                  <LinkLarge key={item.name} item={item} />
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
