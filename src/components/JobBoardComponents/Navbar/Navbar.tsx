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
  design: string;
}

const navigation: NavigationItem[] = [
  { name: 'Find Jobs', href: '/', current: true, design: 'find-jobs' },
  { name: 'News', href: '/news', current: false, design: 'news' },
  { name: 'Login', href: '/login', current: false, design: 'login' },
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
    backgroundImage: "url('/assets/jobs/RectangleBackground.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  // const backgroundImage = {
  //   backgroundImage: "url('/assets/jobs/RectangleBackground.png')",
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  // };

  return (
    <>
      <div className="navbar" style={navbarStyle}>
        <Disclosure as="nav">
          <div className="container mx-auto">
            <div className="relative flex h-30 items-center justify-between lg:px-10 pt-10 pb-5">
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
                        <button className={`nav-items text-xl ${item.design}`}>
                          {item.name}
                        </button>
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
        </Disclosure>
        <div className="container mx-auto">
          <div className=" lg:px-10 text-4xl font-bold text-white ">
            Careers
          </div>

          <div className="flex pb-5 lg:px-10" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-blue-600"
                >
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-white mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    className="ms-1 text-sm font-medium text-white hover:text-blue md:ms-2"
                  >
                    Projects
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-white mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray md:ms-2">
                    Flowbite
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
