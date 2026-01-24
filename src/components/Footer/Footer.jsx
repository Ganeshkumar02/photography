import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Brand */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl tracking-[0.25em] uppercase">
            Prince Studios
          </h2>
          <p className="text-xs tracking-[0.35em] text-gray-400 mt-2">
            Wedding Photography & Films
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Locations */}
          <div>
            <h3 className="footerTitle">Our Locations</h3>
            <div className="mt-8 space-y-6">
              <MapBox title="Mirzapur" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footerTitle">Quick Links</h3>
            <ul className="mt-8 space-y-3 text-sm text-gray-400">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item, i) => (
                  <li key={i} className="hover:text-white transition cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="footerTitle">Follow Us</h3>
            <div className="mt-8 flex gap-4">
              {[Instagram, Facebook, Linkedin, Globe].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footerTitle">Contact</h3>
            <div className="mt-8 space-y-4 text-sm text-gray-400">
              <div className="flex gap-3">
                <MapPin size={18} className="text-white mt-1" />
                <p>Mirzapur, Uttar Pradesh 231001</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-white mt-1" />
                <p>+91 7388610478</p>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-white mt-1" />
                <p>princestudio@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © 2026 Prince Studios • Crafted for timeless wedding memories
        </div>
      </div>

      <style>{`
        .footerTitle {
          font-family: serif;
          font-size: 14px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #fff;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

/* Map Card */
const MapBox = ({ title }) => (
  <div className="rounded-xl overflow-hidden border border-white/10">
    <iframe
      title={title}
      src="https://www.google.com/maps?q=Mirzapur,+Uttar+Pradesh+231001&output=embed"
      width="100%"
      height="120"
      style={{ border: 0 }}
      loading="lazy"
    />
  </div>
);
