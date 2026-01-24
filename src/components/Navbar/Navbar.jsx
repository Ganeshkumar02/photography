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
              className="h-18 w-auto object-contain"
            />
          </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">

              <Link to="/" className="navLink">HOME</Link>
              <Link to="/portfolio" className="navLink">PORTFOLIO</Link>
              <Link to="/packages" className="navLink">PACKAGES</Link>
              <Link to="/about" className="navLink">ABOUT</Link>

              {/* Services */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setOpenServices(true);
                  setOpenLocations(false);
                }}
                onMouseLeave={() => setOpenServices(false)}
              >
                <button className="navLink flex items-center gap-2">
                  SERVICES <span className="text-xs">▼</span>
                </button>

                {openServices && (
                  <div className="dropdown">
                    <Link to="/services/wedding" className="dropItem">Wedding Photography</Link>
                    <Link to="/services/prewedding" className="dropItem">Pre-Wedding Shoot</Link>
                    <Link to="/services/cinematic" className="dropItem">Cinematic Films</Link>
                    <Link to="/services/drone" className="dropItem">Drone Coverage</Link>
                  </div>
                )}
              </div>

              {/* Locations */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setOpenLocations(true);
                  setOpenServices(false);
                }}
                onMouseLeave={() => setOpenLocations(false)}
              >
                <button className="navLink flex items-center gap-2">
                  LOCATIONS <span className="text-xs">▼</span>
                </button>

                {openLocations && (
                  <div className="dropdown">
                    <Link to="/locations/delhi" className="dropItem">Delhi</Link>
                    <Link to="/locations/mumbai" className="dropItem">Mumbai</Link>
                    <Link to="/locations/jaipur" className="dropItem">Jaipur</Link>
                  </div>
                )}
              </div>

              <Link to="/contact" className="navLink">CONTACT</Link>

              {/* 🔥 CTA BUTTON */}
              <Link
                to="/book"
                className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-5 py-2 rounded-full text-sm tracking-wider shadow-md hover:scale-105 transition"
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
                <Link onClick={closeAll} to="/">HOME</Link>
                <Link onClick={closeAll} to="/portfolio">PORTFOLIO</Link>
                <Link onClick={closeAll} to="/packages">PACKAGES</Link>
                <Link onClick={closeAll} to="/about">ABOUT</Link>
                <Link onClick={closeAll} to="/services/wedding">SERVICES</Link>
                <Link onClick={closeAll} to="/contact">CONTACT</Link>

                <Link
                  to="/book"
                  onClick={closeAll}
                  className="bg-yellow-500 text-white text-center py-2 rounded-full mt-2"
                >
                  BOOK YOUR DATE
                </Link>
              </div>
            </div>
          )}
        </nav>

        <style>{`
          .navLink {
            font-size: 13px;
            letter-spacing: .25em;
            font-weight: 500;
            color: #111;
            position: relative;
          }
          .navLink:hover { color: #c59d5f; }

          .dropdown {
            position: absolute;
            top: 100%;
            margin-top: 12px;
            left: 0;
            width: 220px;
            background: white;
            border: 1px solid #eee;
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
            border-radius: 10px;
            overflow: hidden;
          }

          .dropItem {
            display: block;
            padding: 12px 14px;
            font-size: 14px;
            color: #111;
          }
          .dropItem:hover {
            background: #faf7f2;
            color: #c59d5f;
          }
        `}</style>
      </header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
