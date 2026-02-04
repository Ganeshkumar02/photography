import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e')] bg-cover bg-center">
        <div className="bg-black/60">
          <div className="max-w-7xl mx-auto px-6 py-28 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Capturing love, emotions & timeless wedding stories
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Who We Are
          </h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            We are a passionate wedding photography team dedicated to capturing
            your most beautiful moments in the most natural and elegant way.
            Every wedding has a unique story, and our goal is to preserve those
            emotions forever.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From candid smiles to grand celebrations, we focus on every detail
            that makes your special day unforgettable.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e"
          alt="Wedding Photography"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg">
            To create timeless wedding photographs that reflect real emotions,
            genuine love, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Professional & experienced photographers",
            "Candid & cinematic photography style",
            "High-quality photos & videos",
            "Friendly & client-focused approach",
            "On-time delivery with premium editing",
            "Creative storytelling & luxury finish",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg mb-2">✨ {item}</h3>
              <p className="text-gray-600 text-sm">
                We ensure every moment is captured with perfection and care.
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
