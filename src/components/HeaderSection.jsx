// PortfolioNavigation.js
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { XIcon, AcademicCapIcon } from '@heroicons/react/outline';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const navigation = [
  { name: 'Home', to: 'home', current: true },
  { name: 'About Me', to: 'about', current: false },
  { name: 'Skills', to: 'skills', current: false },
  { name: 'Projects', to: 'projects', current: false },
  { name: 'Contact', to: 'Form', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PortfolioNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (to) => () => {
    handleToggle(); // Close the menu on mobile after clicking a link
    scroll.scrollTo(to, {
      smooth: true,
      offset: -70,
      duration: 500,
    });
  };

  return (
    <Disclosure as="nav" className="bg-blue-800">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-end">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Disclosure.Button
                onClick={handleToggle}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <AcademicCapIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <span className="text-white text-lg font-semibold cursor-pointer">Frank Muthomi</span>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <ScrollLink
                      key={item.name}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className={`
                        rounded-md px-3 py-2 text-base font-medium
                        ${item.current ? 'text-white' : 'text-white hover:border-b-2 border-transparent hover:border-white cursor-pointer'}
                      `}
                      activeClass="text-white"
                      onClick={() => handleLinkClick(item.to)}
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer',
                  'block rounded-md px-3 py-2 text-lg font-medium'
                )}
                activeClass="text-white"
                onClick={handleLinkClick(item.to)}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  );
}
