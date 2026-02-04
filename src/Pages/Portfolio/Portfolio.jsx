import React, { useState } from "react";

const images = [
  {
    id: 1,
    category: "Wedding",
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
  },
  {
    id: 2,
    category: "Pre-Wedding",
    src: "https://rentaloutfits.com/upload/DSC05708.jpg",
  },
  {
    id: 3,
    category: "Candid",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    id: 4,
    category: "Wedding",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    id: 5,
    category: "Pre-Wedding",
    src: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43",
  },
  {
    id: 6,
    category: "Candid",
    src: "https://kamatharjun.com/wp-content/uploads/2022/10/Prewedding-blog-8.jpg",
  },
];

const categories = ["All", "Wedding", "Pre-Wedding", "Candid"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="w-full bg-white text-gray-800">

      {/* Hero */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc')] bg-cover bg-center">
        <div className="bg-black/60">
          <div className="max-w-7xl mx-auto px-6 py-28 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              A glimpse of love stories we have captured
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition
                ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-black hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img.src}
                alt="portfolio"
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {img.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Like What You See?
          </h2>
          <p className="text-gray-600 mb-6">
            Let us capture your beautiful wedding moments.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition">
            Book Your Date
          </button>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
