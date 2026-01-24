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
  { icon: Star, title: "Top Rated on Google" },
  { icon: Camera, title: "Hassle-Free Shoots" },
  { icon: Zap, title: "Fast Delivery" },
  { icon: IndianRupee, title: "Pocket Friendly" },
  { icon: BadgeCheck, title: "Editing Included" },
  { icon: Headset, title: "Exceptional Support" },
  { icon: BookOpen, title: "Creative Storytelling" },
  { icon: Wallet, title: "Custom Packages" },
];

const Features = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[#faf7f2] to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.3em] uppercase">
            Why Couples Choose Us
          </h2>
          <div className="w-24 h-[2px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                </div>

                <p className="uppercase tracking-[0.25em] text-sm font-medium text-gray-800">
                  {item.title}
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
