import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ✅ LEFT IMAGES */}
          <div className="relative w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[650px]">
              {/* bottom image */}
              <div className="w-full h-[360px] sm:h-[420px] overflow-hidden">
                <img
                  src="/sliderimage/slider2.jpg" // ✅ change
                  alt="about 1"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* top image */}
              <div className="absolute top-10 left-16 sm:left-28 w-[75%] h-[230px] sm:h-[270px] rounded-2xl overflow-hidden shadow-lg border border-black/10">
                <img
                  src="/sliderimage/slider1.jpg" // ✅ change
                  alt="about 2"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* ✅ RIGHT CONTENT */}
          <div className="w-full">
            <p className="text-xs tracking-[0.45em] uppercase text-gray-600">
              ABOUT
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-serif uppercase tracking-wide leading-[1.15]">
              PRINCE <br /> STUDIOS
            </h2>

            <p className="mt-8 text-gray-600 leading-7 max-w-xl">
              Prince Studios boasts over 7+ years of experience capturing some of
              life's most precious moments. Specializing in baby, newborn,
              maternity, event, pre-wedding, and product photography, we have a
              talent for creating stunning, timeless images that will be
              cherished for years to come.
            </p>

            <p className="mt-6 text-gray-600 leading-7 max-w-xl">
              With a keen eye for detail and a passion for their craft, our team
              of skilled photographers brings a unique and personalized approach
              to every shoot.
            </p>

            {/* ✅ Read more button (same ring animation) */}
            <div className="mt-12">
              <Link
                to="/about"
                className="readMoreBtn"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                READ MORE

                {/* ✅ OUTER thin ring */}
                <span className="ringSvg ringOuter">
                  <svg viewBox="0 0 240 80" preserveAspectRatio="none">
                    <ellipse
                      cx="120"
                      cy="40"
                      rx="110"
                      ry="30"
                      fill="none"
                      stroke="rgba(0,0,0,0.35)"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>

                {/* ✅ INNER ring animated */}
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
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CSS */}
      <style>{`
        .readMoreBtn{
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
          transition:transform .25s ease;
        }

        .readMoreBtn:hover{
          transform:translateY(-2px);
        }

        .ringSvg{
          position:absolute;
          inset:-28px;
          pointer-events:none;
        }

        .ringOuter{
          inset:-34px;
        }

        .ringSvg svg{
          width:100%;
          height:100%;
        }

        /* ✅ EXACT wipe animation */
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

export default AboutSection;
