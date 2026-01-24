import React from "react";

const images = [
  "/Portfolioimg/img2.jpg",
  "/Portfolioimg/img3.jpg",
  "/Portfolioimg/img4.jpg",
  "/Portfolioimg/img5.jpg",
  "/Portfolioimg/img6.jpg",
  "/Portfolioimg/img7.jpg",
];

const InstagramCollection = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <p className="text-xs tracking-[0.35em] uppercase text-gray-600">
          Behind The Scenes of Love
        </p>
        <h2 className="mt-4 text-4xl sm:text-5xl text-gray-900 font-light tracking-wide">
          Our Wedding Stories
        </h2>
        <div className="w-20 h-[2px] bg-amber-500 mx-auto mt-5" />
      </div>

      {/* 🎞️ Moving Film Strip */}
      <div className="filmWrapper">
        <div className="filmTrack">
          {[...images, ...images].map((img, i) => (
            <div key={i} className="filmFrame">
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 flex justify-center">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="instaBtn"
        >
          Follow Our Journey
        </a>
      </div>

      <style>{`
        .filmWrapper {
          overflow: hidden;
          width: 100%;
        }

        .filmTrack {
          display: flex;
          gap: 30px;
          animation: scrollFilm 45s linear infinite;
        }

        .filmFrame {
          flex: 0 0 auto;
          width: 260px;
          height: 360px;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
          transform: rotate(-2deg);
          transition: transform .4s ease;
          background: #fff;
        }

        .filmFrame:nth-child(even) {
          transform: rotate(2deg);
        }

        .filmFrame:hover {
          transform: rotate(0deg) scale(1.05);
          z-index: 5;
        }

        .filmFrame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes scrollFilm {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .instaBtn {
          padding: 14px 40px;
          border-radius: 999px;
          border: 1px solid #000;
          font-size: 12px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #000;
          transition: all .3s ease;
          background: transparent;
        }

        .instaBtn:hover {
          background: #000;
          color: #fff;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default InstagramCollection;
