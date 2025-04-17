import { AuthContext } from "@/Providers/AuthProvider";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  const navLinkStyle = ({ isActive }) =>
    isActive ? "border-b-2 border-green-400" : "";

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={navLinkStyle}
        onClick={() => scrollToSection("Home")}
      >
        Home
      </NavLink>

      <NavLink
        to="#ServiceCards"
        className={navLinkStyle}
        onClick={() => scrollToSection("ServiceCards")}
      >
        Explore Services
      </NavLink>

      <NavLink
        to="#faq"
        className={navLinkStyle}
        onClick={() => scrollToSection("faq")}
      >
        Know More
      </NavLink>
    </>
  );

  const userActionLink = (
    <>
      <NavLink
        to="/features/MyServices"
        className={navLinkStyle}
        onClick={() => setIsMenuOpen(false)}
      >
        My services
      </NavLink>

      <NavLink
        to="/features/MyReviews"
        className={navLinkStyle}
        onClick={() => setIsMenuOpen(false)}
      >
        My Reviews
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-10 w-full">
      <div className="px-4 rounded-full navbar bg-slate-100 sm:justify-between">
        {/* Logo - always visible */}
        <div className="flex-1">
          <a className="text-xl bg-green-400 border-none rounded-full btn hover:bg-green-300">
            InsightHub
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-white bg-green-400 rounded-full hover:bg-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="items-center justify-center hidden gap-6 font-medium md:flex flex-2">
          {navLinks}
        </div>

        {/* Desktop User Actions */}
        <div className="flex-none hidden md:flex">
          {user && user.email ? (
            <div className="p-1 space-x-1 border-2 rounded-full">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="border-none rounded-full btn hover:bg-green-400"
                >
                  My Activity
                </div>
                <ul
                  tabIndex={0}
                  className="z-10 p-2 shadow-sm dropdown-content menu bg-base-100 rounded-box w-52"
                >
                  <li>{userActionLink}</li>
                </ul>
              </div>

              <NavLink
                to="/features/AddService"
                className={({ isActive }) =>
                  isActive
                    ? "btn rounded-full bg-green-500 border-none"
                    : "btn rounded-full bg-green-400 border-none hover:bg-green-300"
                }
              >
                Add Service +
              </NavLink>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full ring ring-green-400">
                    <img alt="User profile" src={user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="z-10 p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user.displayName}
                      <span onClick={logOut} className="p-3 badge">
                        Logout
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>Update Profile</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="p-1 space-x-1 font-bold text-black border-2 rounded-full btn-group">
              <Link
                to="/auth/login"
                className="border-none rounded-full btn hover:bg-green-400"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="bg-green-100 border-green-400 rounded-full hover:bg-green-400 btn"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu - conditionally rendered */}
      {isMenuOpen && (
        <div className="px-4 py-3 shadow-md md:hidden bg-slate-100">
          <div className="flex flex-col gap-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-3 font-medium">{navLinks}</div>

            {/* Mobile User Actions */}
            {user && user.email ? (
              <div className="flex flex-col gap-3 pt-3 border-t">
                <div className="flex items-center gap-2 py-2">
                  <div className="w-8 h-8 overflow-hidden rounded-full ring ring-green-400">
                    <img
                      alt="User profile"
                      src={user.photoURL}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span>{user.displayName}</span>
                </div>

                <NavLink
                  to="/features/AddService"
                  className="text-white bg-green-400 border-none rounded-full btn btn-sm hover:bg-green-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Add Service +
                </NavLink>

                <div className="flex flex-col gap-2 pt-2">
                  <p className="font-semibold text-gray-700">My Activity</p>
                  {userActionLink}
                  <a
                    onClick={() => {
                      logOut();
                      setIsMenuOpen(false);
                    }}
                    className="text-red-500 cursor-pointer"
                  >
                    Logout
                  </a>
                  <a className="cursor-pointer">Update Profile</a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3 pt-3 border-t">
                <Link
                  to="/auth/login"
                  className="w-full rounded-full btn btn-sm hover:bg-green-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="w-full text-white bg-green-400 rounded-full btn btn-sm hover:bg-green-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
