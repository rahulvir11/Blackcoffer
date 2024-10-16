import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation

const Sidenavbar = () => {
  // Menu items
  const menuItems = [
    { name: 'Dashboard', path: '/deshboard' },
    { name: 'Intensity', path: '/intensity' },
    { name: 'Year', path: '/year' },
    { name: 'Likelihood', path: '/likelihood' },
    { name: 'Relevance', path: '/relevance' },
    { name: 'Country', path: '/country' },
    { name: 'Topics', path: '/topics' },
    { name: 'Region', path: '/region' },
    { name: 'City', path: '/city' },
  ];

  return (
    <div>
      <h1 className='font-bold text-2xl text-[#AB7EFD]'>Welcome back</h1>
      <ul className='bg-transparent flex flex-col items-center justify-center gap-2 list-none cursor-pointer'>
        {menuItems.map((item, index) => (
          <li key={index} className="w-full">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `px-2 py-1  text-left rounded-md font-semibold block w-full ${
                  isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidenavbar;
