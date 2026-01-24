import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-14 pb-6">
      {/* ✅ Top brand */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-2xl tracking-widest uppercase">
          PRINCE STUDIOS
        </h2>
        <p className="text-xs tracking-[0.30em] text-gray-300">
          Private Limited
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ✅ Column 1 - Locations Maps */}
          <div>
            <h3 className="footerTitle">OUR LOCATIONS</h3>
            <div className="mt-6 space-y-6">
              <MapBox title="MIRZAPUR" />
              {/* <MapBox title="Varanasi" />
              <MapBox title="Allahabad" /> */}
              {/* <MapBox title="Lucknow" /> */}
            </div>
          </div>

          {/* ✅ Column 2 - Locations Maps */}
          <div>
            <h3 className="footerTitle">OUR LOCATIONS</h3>
            {/* <div className="mt-6 space-y-6">
              <MapBox title="Shillong" />
              <MapBox title="Meghalaya" />
              <MapBox title="Pune" />
            </div> */}
          </div>

          {/* ✅ Column 3 - Pages */}
          <div>
            <h3 className="footerTitle">PAGES</h3>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              {[
                "Home",
                "About Us",
                "Mirzapur",
                "Varanasi",
                "Lucknow",
                "Allahabad",
                "Contact Us",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <ChevronRight size={16} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Column 4 - Social + Contact */}
          <div className="space-y-12">
            {/* Social */}
            <div>
              <h3 className="footerTitle">SOCIAL MEDIA</h3>
              <div className="mt-6 flex items-center gap-5 text-white">
                <a href="#" className="hover:opacity-80">
                  <Instagram />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Facebook />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Linkedin />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Globe />
                </a>
              </div>
            </div>

            {/* Terms */}
            <div>
              <h3 className="footerTitle">TERMS & CONDITIONS</h3>
            </div>

            {/* Contact */}
            <div>
              <h3 className="footerTitle">CONTACT DETAILS</h3>

              <div className="mt-6 space-y-5 text-gray-300 text-sm">
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-1 text-white" />
                  <p>
                    
                    Mirzapur City S.O, Mirzapur, Allahabad, , UTTAR PRADESH <br />
                    Mirzapur, Uttar Pradesh 231001
                  </p>
                </div>

                <div className="flex gap-3">
                  <Phone size={18} className="mt-1 text-white" />
                  <p>+91 738 861 0478</p>
                </div>

                <div className="flex gap-3">
                  <Mail size={18} className="mt-1 text-white" />
                  <p>princestudio@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Bottom bar */}
        <div className="mt-16 border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <p>All Rights Reserved Prince Studios 2026</p>
          <p>
            Developed & Marketed By{" "}
            <span className="text-white font-semibold">Scale Delight</span>
          </p>
        </div>
      </div>

      {/* ✅ CSS */}
      <style>{`
        .footerTitle{
          font-family: serif;
          font-size: 18px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding-left: 12px;
          border-left: 2px solid white;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

/* ✅ Google map mini card */
const MapBox = ({ title }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[115px] overflow-hidden border border-white/15 bg-white">
        {/* ✅ Google Map Iframe */}
        <iframe
          title={title}
          src="https://www.google.com/maps?q=Mirzapur,+Uttar+Pradesh+231001&output=embed
"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};
