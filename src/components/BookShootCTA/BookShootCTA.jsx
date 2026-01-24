import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookShootCTA = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full bg-[#f5f3f0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden">
          {/* ✅ LEFT CONTENT */}
          <div className="flex items-center justify-center py-20 px-6">
            <div className="text-center max-w-md">
              <h2 className="font-serif uppercase tracking-wide leading-[1.2] text-4xl sm:text-5xl">
                BOOK YOUR <br /> SHOOT TODAY!
              </h2>

              <p className="mt-6 text-gray-600 text-base">
                Let us tell your story through our lens
              </p>

              {/* ✅ SAME RING BUTTON */}
              <div className="mt-10 flex justify-center">
                <Link
                  to="/contact"
                  className="ringBtn"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  BOOK A SHOOT

                  {/* OUTER thin ring */}
                  <span className="ringSvg ringOuter">
                    <svg viewBox="0 0 240 80" preserveAspectRatio="none">
                      <ellipse
                        cx="120"
                        cy="40"
                        rx="110"
                        ry="30"
                        fill="none"
                        stroke="rgba(0,0,0,0.45)"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>

                  {/* INNER thick ring (animated) */}
                  <span className="ringSvg ringInner">
                    <svg viewBox="0 0 240 80" preserveAspectRatio="none">
                      <ellipse
                        className={hovered ? "dashAnim" : ""}
                        cx="120"
                        cy="40"
                        rx="100"
                        ry="26"
                        fill="none"
                        stroke="rgba(0,0,0,0.95)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ✅ RIGHT IMAGE */}
          <div className="w-full h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden">
            <img
              src="/Portfolioimg/img6.jpg" // ✅ change image
              alt="Book shoot"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* ✅ CSS */}
      <style>{`
        .ringBtn{
          position:relative;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:12px 34px;
          border-radius:999px;
          font-size:11px;
          letter-spacing:0.35em;
          text-transform:uppercase;
          color:#000;
          font-weight:500;
          cursor:pointer;
        }

        .ringSvg{
          position:absolute;
          inset:-26px;
          pointer-events:none;
        }

        .ringOuter{
          inset:-32px;
        }

        .ringSvg svg{
          width:100%;
          height:100%;
        }

        /* ✅ SAME wipe animation */
        .dashAnim{
          stroke-dasharray: 480;
          stroke-dashoffset: 0;
          animation: wipeLine 1.3s ease-in-out infinite;
        }

        @keyframes wipeLine{
          0%   { stroke-dashoffset: 0; opacity:1; }
          60%  { stroke-dashoffset: 420; opacity:1; }
          90%  { opacity:0; }
          100% { stroke-dashoffset: 0; opacity:1; }
        }
      `}</style>
    </section>
  );
};

export default BookShootCTA;
