import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import React from 'react';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';
// import Signdialog from './Signdialog';
// import Registerdialog from './Registerdialog';
import { Link } from 'react-router-dom';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Profile', href: '/', current: true },
  { name: 'Messages', href: '#services', current: false },
  { name: 'Jobs', href: '#about', current: false },
  // { name: 'Project', href: '#project', current: false },
  // { name: 'Help', href: '/', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    boxShadow: scrolled ? '0 15px 30px rgba(0, 0, 0, 0.12)' : 'none',
  };

  return (
    <Disclosure as="nav" className="navbar" style={navbarStyle}>
      <>
        <div className="container mx-auto ">
          <div className="relative flex h-20 items-center justify-between lg:px-10">
            <div className="flex flex-1 items-center sm:items-stretch  justify-between">
              {/* LOGO */}

              <div className="">
                <img
                  className="block h-12 w-20 lg:hidden"
                  src={'/assets/jobs/logo.svg'}
                  alt="dsign-logo"
                />
                <img
                  className="hidden h-full w-full lg:block"
                  src={'/assets/jobs/logo.svg'}
                  alt="dsign-logo"
                />
              </div>

              {/* LINKS */}

              <div className="hidden lg:block">
                <div className="flex space-x-4 card-body ">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? ' text-black hover:opacity-100'
                          : 'hover:text-black hover:opacity-100',
                        'px-3 py-4 text-lg font-normal opacity-75 space-links',
                      )}
                      aria-current={item.href ? 'page' : undefined}
                    >
                      <button className="nav-button">{item.name}</button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* SIGNIN DIALOG */}

            {/* <Signdialog /> */}

            {/* REGISTER DIALOG */}

            {/* <Registerdialog /> */}

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden mr-5">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
