import React, { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

//TODO: Refactor this to use an array of links or dynamic
  const NavLinks = () => (
    <>
      <a
        href="#"
        className="items-center block px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent sm:inline-flex hover:border-gray-300 hover:text-gray-700"
      >
        Platform
      </a>
      <a
        href="#"
        className="items-center block px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent sm:inline-flex hover:border-gray-300 hover:text-gray-700"
      >
        Customers
      </a>
      <a
        href="#"
        className="items-center block px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent sm:inline-flex hover:border-gray-300 hover:text-gray-700"
      >
        Pricing
      </a>
      <a
        href="#"
        className="items-center block px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent sm:inline-flex hover:border-gray-300 hover:text-gray-700"
      >
        Resources
      </a>
      <a
        href="#"
        className="items-center block px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent sm:inline-flex hover:border-gray-300 hover:text-gray-700"
      >
        Company
      </a>
    </>
  );

  const ActionButtons = () => (
    <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
      <a
        href="#"
        className="w-full px-3 py-2 text-sm font-medium text-center text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 sm:w-auto"
      >
        Login
      </a>
      <a
        href="#"
        className="w-full px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 sm:w-auto"
      >
        Book a demo
      </a>
    </div>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center mr-2 -ml-2">
              <img className="w-auto h-8" src={"../images/logo.png"} alt="Encord" />
            </a>

            {/* Hamburger Menu for Mobile */}
            <div className="ml-auto sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8 sm:ml-6">
            <NavLinks />
          </div>

          {/* Desktop Action Buttons */}
          <div className="items-center hidden sm:flex">
            <ActionButtons />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 bg-white shadow-lg sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLinks />
            </div>
            <div className="px-4 py-3 border-t">
              <ActionButtons />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
