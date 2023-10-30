import { useMediaQuery } from 'react-responsive';
import { Fade as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleHamburger } from '../../store/reducers/hamburger';
import logo from '../../assets/logo-grey.svg';
import Container from '../Container/Container';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Links from './Links';

export default function Header() {
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });
  const isOpen = useAppSelector((state) => state.hamburger.isOpen);
  const dispatch = useAppDispatch();

  return (
    <header className="font-sans bg-transparent text-slate-600 h-headerHeight">
      <Container>
        <div className="flex items-center justify-between w-full m-auto mt-6 align-middle">
          <Link
            className="flex items-center justify-center px-3 py-1 my-auto transition duration-100 delay-75 rounded hover:no-underline hover:bg-watizat-600/10"
            to="/"
          >
            <img
              className="mt-1 max-h-10 fill-black"
              src={logo}
              alt="watizat logo"
            />
            <span className="ml-2 text-2xl font-normal leading-none text-slate-600 ">
              Watizat
            </span>
          </Link>
          <div className="hidden md:flex">
            <Links />
          </div>
          <div className="text-4xl md:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={() => dispatch(toggleHamburger(!isOpen))}
            />
          </div>
          {isOpen && !isTablet && <BurgerMenu />}
        </div>
      </Container>
    </header>
  );
}
