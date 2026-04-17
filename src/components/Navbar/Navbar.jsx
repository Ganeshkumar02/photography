import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navClass =
  "relative text-[13px] tracking-[0.25em] font-medium !text-black no-underline group";

  const underline =
    "absolute left-1/2 bottom-0 h-[1.5px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full group-hover:left-0";

  return (
    <>
      <header className="w-full bg-white/90 backdrop-blur-md border-b fixed top-0 left-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <Link to="/">
              <img src="/Logo/1.png" alt="logo" className="h-14" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">

              {["HOME", "PORTFOLIO", "PACKAGES", "ABOUT"].map((item, i) => (
                <Link
                  key={i}
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className={navClass}
                >
                  {item}
                  <span className={underline}></span>
                </Link>
              ))}

              {/* SERVICES (No dropdown) */}
              <Link to="#" className={navClass}>
                SERVICES
                <span className={underline}></span>
              </Link>

              {/* LOCATIONS (No dropdown) */}
              <Link to="#" className={navClass}>
                LOCATIONS
                <span className={underline}></span>
              </Link>

              {/* Contact */}
              <Link to="/contact" className={navClass}>
                CONTACT
                <span className={underline}></span>
              </Link>

              {/* CTA */}
              <Link
                to="/book"
                className="ml-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-5 py-2 rounded-full text-sm tracking-wider shadow-md hover:scale-105 transition no-underline"
              >
                BOOK YOUR DATE
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 border rounded-md"
              onClick={() => setOpenMenu(!openMenu)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {openMenu && (
            <div className="lg:hidden pb-6">
              <div className="flex flex-col gap-3 border-t pt-4 text-sm tracking-wider">

                {["HOME", "PORTFOLIO", "PACKAGES", "ABOUT"].map((item, i) => (
                  <Link
                    key={i}
                    onClick={() => setOpenMenu(false)}
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="no-underline text-gray-900"
                  >
                    {item}
                  </Link>
                ))}

                <Link to="#" className="text-gray-900 no-underline">
                  SERVICES
                </Link>

                <Link to="#" className="text-gray-900 no-underline">
                  LOCATIONS
                </Link>

                <Link to="/contact" className="text-gray-900 no-underline">
                  CONTACT
                </Link>

                <Link
                  to="/book"
                  className="bg-orange-500 !text-black visited:!text-white  px-4 py-2 rounded-full text-center"
                >
                  BOOK NOW
                </Link>

              </div>
            </div>
          )}
        </nav>
      </header>

      <div className="h-20" />
    </>
  );
};

export default Navbar;