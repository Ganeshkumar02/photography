import React from "react";
import {
  Star,
  Camera,
  Zap,
  IndianRupee,
  BadgeCheck,
  Headset,
  BookOpen,
  Wallet,
} from "lucide-react";

const features = [
  { icon: Star, title: "TOP RATED\nON GOOGLE" },
  { icon: Camera, title: "HASSLE FREE\nSHOOT" },
  { icon: Zap, title: "FAST\nDELIVERY" },
  { icon: IndianRupee, title: "POCKET\nFRIENDLY" },

  { icon: BadgeCheck, title: "EDITING\nINCLUDED" },
  { icon: Headset, title: "EXCEPTIONAL\nCUSTOMER\nSERVICE" },
  { icon: BookOpen, title: "CREATIVE\nSTORYTELLING\nAPPROACH" },
  { icon: Wallet, title: "CUSTOMIZED\nPHOTOGRAPHY\nPACKAGES" },
];

const Features = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-16">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-7 justify-center lg:justify-start"
              >
                {/* ✅ Icon Box */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <Icon className="w-14 h-14 text-black stroke-[1.3]" />
                </div>

                {/* ✅ Text */}
                <p
                  className="uppercase text-[18px] tracking-[0.22em] text-black leading-[1.6]"
                  style={{ fontFamily: "serif" }}
                >
                  {item.title.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
