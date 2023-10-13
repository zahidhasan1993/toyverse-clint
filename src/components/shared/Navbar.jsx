import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../customHooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logOut } = useAuth();
  // console.log(user);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="bg-gray-600 bg-opacity-30 text-white p-4 fixed z-10 w-full container mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">
          Toy<span className="text-red-600">Verse</span>
        </Link>

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
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/store" className="hover:text-gray-300">
            Store
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          {user ? (
            <>
              <Link to="/addtoy" className="hover:text-gray-300">
                Add Toy
              </Link>{" "}
              <Link to="" className="hover:text-gray-300">
                My Toy
              </Link>
            </>
          ) : (
            <></>
          )}

          {user ? (
            <button onClick={handleLogout} className="hover:text-gray-300">
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden block mt-4">
          <Link to="/" className="block px-4 py-2 text-white hover:bg-gray-600">
            Home
          </Link>
          <Link to="/store" className="block px-4 py-2 text-white hover:bg-gray-600">
            Store
          </Link>
          <Link to="/contact" className="block px-4 py-2 text-white hover:bg-gray-600">
            Contact
          </Link>
          {user ? (
            <>
              <Link
                to="/addtoy"
                className="block px-4 py-2 text-white hover:bg-gray-600"
              >
                Add Toy
              </Link>
              <Link
                to=""
                className="block px-4 py-2 text-white hover:bg-gray-600"
              >
                My Toy
              </Link>
            </>
          ) : (
            <></>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-white hover:bg-gray-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block px-4 py-2 text-white hover:bg-gray-600"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
