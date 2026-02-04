import React from "react";

const Packages = () => {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552')] bg-cover bg-center">
        <div className="bg-black/60">
          <div className="max-w-7xl mx-auto px-6 py-28 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Wedding Packages
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Choose the perfect package for your special day
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Package Card */}
          <div className="border rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">Silver Package</h2>
            <p className="text-gray-500 mb-4">Perfect for intimate weddings</p>

            <p className="text-4xl font-bold mb-6">₹25,000</p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>📸 1 Professional Photographer</li>
              <li>⏱️ 6 Hours Coverage</li>
              <li>🖼️ 200+ Edited Photos</li>
              <li>💾 Online Gallery</li>
            </ul>

            <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>

          {/* Highlighted Package */}
          <div className="border-2 border-black rounded-2xl shadow-xl p-8 text-center scale-105">
            <span className="text-sm bg-black text-white px-4 py-1 rounded-full">
              Most Popular
            </span>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Gold Package</h2>
            <p className="text-gray-500 mb-4">Best for grand weddings</p>

            <p className="text-4xl font-bold mb-6">₹45,000</p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>📸 2 Professional Photographers</li>
              <li>🎥 Cinematic Video Coverage</li>
              <li>⏱️ Full Day Coverage</li>
              <li>🖼️ 400+ Edited Photos</li>
              <li>📀 Premium Wedding Album</li>
            </ul>

            <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>

          {/* Package Card */}
          <div className="border rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">Platinum Package</h2>
            <p className="text-gray-500 mb-4">Luxury wedding experience</p>

            <p className="text-4xl font-bold mb-6">₹70,000</p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>📸 3 Photographers + 1 Videographer</li>
              <li>🎬 Cinematic Highlight Film</li>
              <li>🕒 Full Wedding Coverage</li>
              <li>🖼️ 600+ Edited Photos</li>
              <li>📀 Premium Album + Drone Shots</li>
            </ul>

            <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us to create a personalized photography package for your wedding.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
};

export default Packages;
