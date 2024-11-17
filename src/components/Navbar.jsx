import React, { useState } from 'react';
import 'flowbite';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#4A332B] border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between p-3 mx-auto">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-12" alt="Logo" />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-red-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto  `}
          id="navbar-default"
        >
<ul className="flex flex-col px-10 mx-14 py-10 text-[#F9E9C8] font-medium border rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800">
  <li>
    <Link
      to="/"
      className="block w-full px-4 py-2 text-center rounded hover:bg-[#F9E9C8] hover:text-[#270810] md:p-0"
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="/about"
      className="block w-full px-4 py-2 text-center rounded hover:bg-[#F9E9C8] hover:text-[#270810] md:p-0"
    >
      Menu
    </Link>
  </li>
  <li>
    <Link
      to="/services"
      className="block w-full px-4 py-2 text-center rounded hover:bg-[#F9E9C8] hover:text-[#270810] md:p-0"
    >
      Services
    </Link>
  </li>
  <li>
    <Link
      to="/pricing"
      className="block w-full px-4 py-2 text-center rounded hover:bg-[#F9E9C8] hover:text-[#270810] md:p-0"
    >
      Product
    </Link>
  </li>
  <li>
    <Link
      to="/contact"
      className="block w-full px-4 py-2 text-center rounded hover:bg-[#F9E9C8] hover:text-[#270810] md:p-0"
    >
      Blog
    </Link>
  </li>
  <li>
    <Link
      to="/contact"
      className="block w-full px-4 py-2 text-center rounded hover:bg-[#F9E9C8] hover:text-[#270810] md:p-0"
    >
      Contact
    </Link>
  </li>
</ul>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
