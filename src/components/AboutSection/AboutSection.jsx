import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full bg-[#f9f6f1] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGES */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[640px]">

              <div className="w-full h-[380px] sm:h-[440px] overflow-hidden rounded-xl shadow-md">
                <img
                  src="/sliderimage/slider2.jpg"
                  alt="about 1"
                  className="w-full h-full object-cover object-center scale-105"
                />
              </div>

              <div className="absolute top-12 left-16 sm:left-28 w-[70%] h-[240px] sm:h-[280px] rounded-xl overflow-hidden shadow-2xl border border-white/40">
                <img
                  src="/sliderimage/slider1.jpg"
                  alt="about 2"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-xs tracking-[0.45em] uppercase text-gray-600">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-light tracking-wide leading-tight">
              Crafting Wedding <br /> Memories That Last Forever
            </h2>

            <div className="w-20 h-[2px] bg-amber-500 mt-6" />

            <p className="mt-8 text-gray-700 leading-8 max-w-xl">
              With over 7 years of experience, Prince Photography specializes in
              capturing timeless wedding stories filled with emotion, elegance,
              and beauty. From intimate candid moments to grand cinematic
              celebrations, we document love in its purest form.
            </p>

            <p className="mt-6 text-gray-700 leading-8 max-w-xl">
              Our team blends creativity with storytelling, ensuring each wedding
              film and photograph feels personal, cinematic, and unforgettable.
            </p>

            {/* Premium Button */}
            <div className="mt-12">
              <Link
                to="/about"
                className="readMoreBtn"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Discover More
                <span className="glowPulse" />

                <span className="ringSvg ringOuter">
                  <svg viewBox="0 0 240 80">
                    <ellipse
                      cx="120"
                      cy="40"
                      rx="110"
                      ry="30"
                      fill="none"
                      stroke="rgba(0,0,0,0.25)"
                      strokeWidth="1.2"
                    />
                  </svg>
                </span>

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
        </div>
      </div>

      <style>{`
        .readMoreBtn {
          position: relative;
          padding: 14px 40px;
          border-radius: 999px;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #000;
          font-weight: 500;
          transition: transform .3s ease;
        }

        .readMoreBtn:hover { transform: scale(1.05); }

        .glowPulse {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%);
          animation: pulseGlow 2.5s ease-in-out infinite;
          z-index: -1;
        }

        @keyframes pulseGlow {
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

export default AboutSection;
