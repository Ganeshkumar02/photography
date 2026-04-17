import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openLocations, setOpenLocations] = useState(false);

  const closeAll = () => {
    setOpenServices(false);
    setOpenLocations(false);
    setOpenMenu(false);
  };

  const navClass =
    "relative text-[13px] tracking-[0.25em] font-medium text-gray-900 pb-1 group";

  return (
    <>
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/Logo/1.png"
                alt="Prince Photography"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Nav Item */}
              {["HOME", "PORTFOLIO", "PACKAGES", "ABOUT"].map((item, i) => (
                <Link
                  key={i}
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className={navClass}
                >
                  {item}
                  <span className="absolute left-1/2 bottom-0 h-[1.5px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}

              {/* Services */}
              <div className="relative group">
                <button className={`${navClass} flex items-center gap-1`}>
                  SERVICES ▼
                  <span className="absolute left-1/2 bottom-0 h-[1.5px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>

                {/* Dropdown */}
                <div
                  className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-300"
                >
                  {[
                    "Wedding Photography",
                    "Pre-Wedding Shoot",
                    "Cinematic Films",
                    "Drone Coverage",
                  ].map((item, i) => (
                    <Link
                      key={i}
                      to={`/services/${item.toLowerCase().replace(/ /g, "")}`}
                      className="block px-4 py-3 text-sm text-gray-800 hover:bg-amber-50 hover:text-amber-600 transition"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Locations */}
              <div className="relative group">
                <button className={`${navClass} flex items-center gap-1`}>
                  LOCATIONS ▼
                  <span className="absolute left-1/2 bottom-0 h-[1.5px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>

                <div
                  className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-300"
                >
                  {["Delhi", "Mumbai", "Jaipur"].map((city, i) => (
                    <Link
                      key={i}
                      to={`/locations/${city.toLowerCase()}`}
                      className="block px-4 py-3 text-sm text-gray-800 hover:bg-amber-50 hover:text-amber-600 transition"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/contact" className={navClass}>
                CONTACT
                <span className="absolute left-1/2 bottom-0 h-[1.5px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>

              {/* CTA */}
              <Link
                to="/book"
                className="ml-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-5 py-2 rounded-full text-sm tracking-wider shadow-md hover:scale-105 transition"
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
                    onClick={closeAll}
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                ))}

                <Link onClick={closeAll} to="/services/wedding">
                  SERVICES
                </Link>
                <Link onClick={closeAll} to="/contact">
                  CONTACT
                </Link>

       <Link
  to="/book"
  onClick={closeAll}
  className="group perspective"
>
  <div className="relative w-[180px] h-[45px] transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">

    {/* Front */}
    <div className="absolute inset-0 flex items-center justify-center
      bg-yellow-500 text-white rounded-full font-semibold
      backface-hidden">
      BOOK YOUR DATE
    </div>

    {/* Back */}
    <div className="absolute inset-0 flex items-center justify-center
      bg-amber-600 text-white rounded-full font-semibold
      rotate-y-180 backface-hidden">
      BOOK NOW
    </div>

  </div>
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
