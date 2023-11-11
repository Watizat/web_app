import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import LinkSquare from './LinkSquare';

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
  href: string;
  icon: React.ElementType;
  onclick: () => void;
}

interface Props {
  navigation: NavigationItem[];
  actions: ActionItem[];
}

export default function Desktop({ navigation, actions }: Props) {
  const { pathname } = useLocation();

  return (
    <div
      className={`hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:flex lg:flex-col lg:w-20 lg:overflow-y-auto lg:bg-watizat-500 lg:pb-4
        ${pathname === '/admin/dashboard' ? '2xl:fixed' : '2xl:hidden'}`}
    >
      <div className="flex items-center justify-center h-16 shrink-0">
        <Link to="/">
          <img className="w-auto h-10 mt-2" src={logo} alt="Watizat" />
        </Link>
      </div>
      <nav className="flex flex-col flex-1 mt-8">
        <ul className="flex flex-col justify-between flex-1">
          <li>
            <ul className="flex flex-col items-center flex-1 space-y-1">
              {navigation.map((item) => (
                <LinkSquare
                  key={item.name}
                  item={{ ...item, onclick: () => {} }}
                />
              ))}
            </ul>
          </li>
          <li className="flex flex-col items-center mt-auto ">
            <ul>
              {actions.map((item) => (
                <LinkSquare key={item.name} item={{ ...item, active: true }} />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
