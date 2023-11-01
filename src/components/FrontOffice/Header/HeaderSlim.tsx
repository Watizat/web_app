import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline';
import logo from '../../../assets/logo-color.svg';
import headerLinks from './source';
import footerLinks from '../Footer/source';

export default function HeaderSlim() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileNav = headerLinks.concat(footerLinks);

  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-16 bg-white border-b border-gray-900/10">
      <div className="flex items-center justify-between w-full px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="flex items-center flex-1 gap-x-6">
          <button
            type="button"
            className="p-3 -m-3 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-5 h-5 text-gray-900" aria-hidden="true" />
          </button>
          <Link to="/" className="-m-2.5 md:-m-1.5 p-1.5 relative left-0">
            <span className="sr-only">Watizat</span>
            <img className="w-auto h-10" src={logo} alt="watizat logo" />
          </Link>
        </div>
        <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
          {headerLinks.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-end flex-1 gap-x-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <Link
            to="/login"
            className="hidden text-sm font-semibold leading-6 text-gray-900 md:flex"
          >
            Membres Watizat&nbsp;&nbsp;
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full px-4 pb-6 overflow-y-auto bg-white sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="-ml-0.5 flex h-16 items-center gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            <div className="-ml-0.5">
              <Link to="/" className="-m-1.5 block p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="w-auto h-8" src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="mt-2 space-y-2">
            {mobileNav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
