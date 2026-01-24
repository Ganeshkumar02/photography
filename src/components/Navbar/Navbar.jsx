import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openLocations, setOpenLocations] = useState(false);

  const closeAllDropdowns = () => {
    setOpenServices(false);
    setOpenLocations(false);
  };

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ✅ Fixed height */}
          <div className="h-22.5 flex items-center justify-between">
            {/* Left Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <div className="w-8 h-6 border-2 border-black rounded-md relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-3 border-2 border-black rounded-t-md bg-white"></div>
                </div>
              </div>

              <div className="leading-tight">
                <h1 className="text-lg font-semibold tracking-wide text-black">
                  PRINCE STUDIOS
                </h1>
                <p className="text-xs tracking-[0.2em] text-gray-600">
                  Private Limited
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/" className="navLink">HOME</Link>
              <Link to="/about" className="navLink">ABOUT US</Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  closeAllDropdowns();
                  setOpenServices(true);
                }}
                onMouseLeave={() => setOpenServices(false)}
              >
                <button className="navLink flex items-center gap-2">
                  OUR SERVICES <span className="text-xs">▼</span>
                </button>

                {openServices && (
                  <div className="absolute top-full mt-3 left-0 w-56 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden">
                    <Link to="/services/web-development" className="dropItem">
                      Web Development
                    </Link>
                    <Link to="/services/ui-ux" className="dropItem">
                      UI/UX Design
                    </Link>
                    <Link to="/services/branding" className="dropItem">
                      Branding
                    </Link>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  closeAllDropdowns();
                  setOpenLocations(true);
                }}
                onMouseLeave={() => setOpenLocations(false)}
              >
                <button className="navLink flex items-center gap-2">
                  OUR LOCATIONS <span className="text-xs">▼</span>
                </button>

                {openLocations && (
                  <div className="absolute top-full mt-3 left-0 w-56 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden">
                    <Link to="/locations/delhi" className="dropItem">Delhi</Link>
                    <Link to="/locations/mumbai" className="dropItem">Mumbai</Link>
                    <Link to="/locations/bengaluru" className="dropItem">Bengaluru</Link>
                  </div>
                )}
              </div>

              <Link to="/blogs" className="navLink">BLOGS</Link>
              <Link to="/contact" className="navLink">CONTACT US</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md border border-gray-300"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <div className="w-5 h-5 flex flex-col justify-between">
                <span className="h-0.5 w-full bg-black"></span>
                <span className="h-0.5 w-full bg-black"></span>
                <span className="h-0.5 w-full bg-black"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {openMenu && (
            <div className="lg:hidden pb-6">
              <div className="flex flex-col gap-2 border-t pt-4">
                <Link to="/" className="mobileLink" onClick={() => setOpenMenu(false)}>HOME</Link>
                <Link to="/about" className="mobileLink" onClick={() => setOpenMenu(false)}>ABOUT US</Link>
                <Link to="/blogs" className="mobileLink" onClick={() => setOpenMenu(false)}>BLOGS</Link>
                <Link to="/contact" className="mobileLink" onClick={() => setOpenMenu(false)}>CONTACT US</Link>
              </div>
            </div>
          )}
        </nav>

        <style>{`
          .navLink {
            font-size: 13px;
            letter-spacing: 0.25em;
            font-weight: 500;
            color: #111;
            transition: color .2s ease;
          }
          .dropItem {
            display: block;
            padding: 12px 14px;
            font-size: 14px;
            color: #111;
          }
          .mobileLink {
            padding: 12px 10px;
            border-radius: 8px;
            font-size: 13px;
            letter-spacing: 0.2em;
            font-weight: 500;
            color: #111;
          }
        `}</style>
      </header>

      {/* ✅ Navbar spacer */}
      <div className="h-22.5" />
    </>
  );
};

export default Navbar;
