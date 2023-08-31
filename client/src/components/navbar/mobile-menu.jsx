import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { BiMenu } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../logout-button';

const MobileMenu = ({ menuOptions }) => {
  return (
    <Menu as="div" className="inline-block relative text-left sm:hidden">
      <Menu.Button className="p-1.5 text-3xl rounded-md bg-primary-900 border border-primary-700 hover:bg-primary-950 hover:border-primary-600 shadow-sm">
        <BiMenu />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 px-2 py-4 mt-2 space-y-1 w-40 rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right bg-primary-900 focus:outline-none">
          {menuOptions.map(({ title, link }) => (
            <Menu.Item
              className="block px-3 py-2 rounded-md hover:bg-primary-700 hover:text-white"
              as={NavLink}
              key={link}
              to={link}>
              {title}
            </Menu.Item>
          ))}
          <Menu.Item>
            <LogoutButton />
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MobileMenu;
