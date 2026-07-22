
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = ["HOME", "PORTFOLIO", "PACKAGES", "ABOUT"];

  const navClass =
    "relative text-sm tracking-[0.18em] font-medium text-white no-underline group transition-all duration-300 hover:text-amber-400";

  const underline =
    "absolute left-1/2 -bottom-1 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full group-hover:left-0";

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900/95 backdrop-blur-md shadow-md border-b border-zinc-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-16 sm:h-20 flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/Logo/1.png"
                alt="Logo"
                className="
                  h-10
                  sm:h-12
                  md:h-14
                  lg:h-16
                  w-auto
                  object-contain
                "
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">

              {navItems.map((item, i) => (
                <Link
                  key={i}
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className={navClass}
                >
                  {item}
                  <span className={underline}></span>
                </Link>
              ))}

              <Link to="/services" className={navClass}>
                SERVICES
                <span className={underline}></span>
              </Link>

              <Link to="/locations" className={navClass}>
                LOCATIONS
                <span className={underline}></span>
              </Link>

              <Link to="/contact" className={navClass}>
                CONTACT
                <span className={underline}></span>
              </Link>

              <Link
                to="/book"
                className="
                  ml-2
                  bg-gradient-to-r
                  from-amber-500
                  to-orange-600
                  text-white
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  font-medium
                  tracking-wide
                  shadow-lg
                  hover:scale-105
                  hover:shadow-orange-500/30
                  transition-all
                  duration-300
                  no-underline
                "
              >
                BOOK YOUR DATE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="
                lg:hidden
                text-white
                text-3xl
                p-2
              "
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <FiX /> : <FiMenu />}
            </button>

          </div>

          {/* Mobile Menu */}
          <div
            className={`
              lg:hidden
              overflow-hidden
              transition-all
              duration-300
              ${openMenu ? "max-h-[500px] pb-5" : "max-h-0"}
            `}
          >
            <div className="bg-white rounded-2xl shadow-xl p-5 mb-4">

              <div className="flex flex-col gap-5">

                {navItems.map((item, i) => (
                  <Link
                    key={i}
                    onClick={() => setOpenMenu(false)}
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="
                      text-gray-800
                      font-medium
                      tracking-wider
                      no-underline
                      hover:text-orange-500
                      transition
                    "
                  >
                    {item}
                  </Link>
                ))}

                <Link
                  to="/services"
                  onClick={() => setOpenMenu(false)}
                  className="text-gray-800 font-medium no-underline hover:text-orange-500"
                >
                  SERVICES
                </Link>

                <Link
                  to="/locations"
                  onClick={() => setOpenMenu(false)}
                  className="text-gray-800 font-medium no-underline hover:text-orange-500"
                >
                  LOCATIONS
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setOpenMenu(false)}
                  className="text-gray-800 font-medium no-underline hover:text-orange-500"
                >
                  CONTACT
                </Link>

                <Link
                  to="/book"
                  onClick={() => setOpenMenu(false)}
                  className="
                    bg-gradient-to-r
                    from-amber-500
                    to-orange-600
                    text-white
                    py-3
                    rounded-full
                    text-center
                    font-semibold
                    no-underline
                  "
                >
                  BOOK NOW
                </Link>

              </div>
            </div>
          </div>

        </nav>
      </header>

      {/* Spacer */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;
