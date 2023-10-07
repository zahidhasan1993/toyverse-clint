import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <nav className="bg-gray-600 bg-opacity-70 md:bg-opacity-0 md:bg-base text-white p-4 fixed z-10 w-full container mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-semibold">
          ToyVerse
        </a>

        <button
          className="lg:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className="hidden lg:flex space-x-6">
          <Link to='/' className="hover:text-gray-300">
            Home
          </Link>
          <a href="#" className="hover:text-gray-300">
            Store
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <Link to='/login' className="hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden block mt-4">
          <Link to='/' href="#" className="block px-4 py-2 text-white hover:bg-gray-600">
            Home
          </Link>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600">
            Store
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-600">
            About
          </a>
          <Link to='/login' className="block px-4 py-2 text-white hover:bg-gray-600">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
