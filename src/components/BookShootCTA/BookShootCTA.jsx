import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookShootCTA = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full py-28 bg-gradient-to-b from-[#faf7f2] to-[#f1ede6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-600">
              Let’s Create Magic
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
              Book Your Wedding <br /> Shoot Today
            </h2>

            <div className="w-20 h-[2px] bg-amber-500 mt-6 mx-auto lg:mx-0" />

            <p className="mt-8 text-gray-700 max-w-lg leading-8">
              Your love story deserves to be captured in the most beautiful,
              cinematic way. Let us turn your special moments into timeless
              memories.
            </p>

            {/* PREMIUM BUTTON */}
            <div className="mt-12">
              <Link
                to="/contact"
                className="premiumBtn"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Book Your Date

                <span className="glow" />

                {/* Outer Ring */}
                <span className="ringSvg ringOuter">
                  <svg viewBox="0 0 240 80">
                    <ellipse
                      cx="120"
                      cy="40"
                      rx="110"
                      ry="30"
                      fill="none"
                      stroke="rgba(0,0,0,0.3)"
                      strokeWidth="1.2"
                    />
                  </svg>
                </span>

                {/* Animated Ring */}
                <span className="ringSvg ringInner">
                  <svg viewBox="0 0 240 80">
                    <ellipse
                      className={hovered ? "dashAnim" : ""}
                      cx="120"
                      cy="40"
                      rx="100"
                      ry="26"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <img
              src="/Portfolioimg/img6.jpg"
              alt="Book shoot"
              className="w-full h-[520px] object-cover object-center scale-105 hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>

      <style>{`
        .premiumBtn {
          position: relative;
          padding: 16px 46px;
          border-radius: 999px;
          font-size: 12px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #000;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform .3s ease;
        }

        .premiumBtn:hover { transform: scale(1.05); }

        .glow {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%);
          animation: glowPulse 2.5s ease-in-out infinite;
          z-index: -1;
        }

        @keyframes glowPulse {
          0% { opacity: .2; transform: scale(.95); }
          50% { opacity: .5; transform: scale(1.05); }
          100% { opacity: .2; transform: scale(.95); }
        }

        .ringSvg { position: absolute; inset: -30px; pointer-events: none; }
        .ringOuter { inset: -36px; }

        .ringSvg svg { width: 100%; height: 100%; }

        .dashAnim {
          stroke-dasharray: 480;
          animation: wipeLine 1.4s ease-in-out infinite;
        }

        @keyframes wipeLine {
          0% { stroke-dashoffset: 0; }
          60% { stroke-dashoffset: 420; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

export default BookShootCTA;
