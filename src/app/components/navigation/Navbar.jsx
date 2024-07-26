"use client"
import { useState } from 'react';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            className="w-28 cursor-pointer"
            src="logo.png"
            alt="Logo"
            href="/"
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'
            } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link href="/projects" className="hover:text-gray-500">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-gray-500">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-gray-500">
                TEAM
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-500">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
