import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaHeart } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you ❤️ We will contact you very soon!");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="w-full bg-white text-gray-800">

      {/* Hero */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc')] bg-cover bg-center">
        <div className="bg-black/70">
          <div className="max-w-7xl mx-auto px-6 py-32 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let’s Create Beautiful Memories
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your love story deserves to be captured with emotion, elegance & perfection
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">
            Get In Touch With Us
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Whether it’s a grand wedding, pre-wedding shoot, or a special celebration,
            we’re here to capture every smile, tear & magical moment.
          </p>

          <div className="space-y-5 text-lg">
            <div className="flex items-center gap-4">
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope />
              <span>contact@yourstudio.com</span>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-7 py-3 rounded-full hover:scale-105 transition"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-10 rounded-3xl shadow-xl space-y-6"
        >
          <h3 className="text-2xl font-semibold text-center mb-2">
            Book Your Date
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-black outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-black outline-none"
          />

          <textarea
            name="message"
            placeholder="Tell us about your wedding..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-black outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition text-lg"
          >
            Send Inquiry
          </button>
        </form>

      </section>

      {/* Trust Section */}
      {/* Why Couples Love Us */}
<section className="bg-gray-100 py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-12">
      Why Couples Love Us
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        {
          title: "Natural & Candid Moments",
          img: "https://i0.wp.com/iglowstudioz.com/wp-content/uploads/2025/04/1-29.webp?resize=780%2C439&ssl=1",
        },
        {
          title: "Friendly & Professional Team",
          img: "https://b2419255.smushcdn.com/2419255/wp-content/uploads/2022/06/DSF8156-scaled.jpg?lossy=2&strip=1&webp=1",
        },
        {
          title: "Cinematic Wedding Films",
          img: "https://i0.wp.com/iglowstudioz.com/wp-content/uploads/2025/11/Most-Loved-Trends-in-Indian-Wedding-Videographer-Videos.webp?resize=780%2C439&ssl=1",
        },
        {
          title: "Premium Quality Albums",
          img: "https://www.soodstudio.com/images/CategoriesImages/acrylic-albums0iGoi11-04-01.jpg",
        },
        {
          title: "On-Time Delivery",
          img: "https://images.unsplash.com/photo-1574017213370-4e7d893040f9?auto=format&fit=crop&w=480&h=353",
        },
        {
          title: "Hundreds of Happy Couples",
          img: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
        >
          <div className="relative h-56 overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">
              ❤️ {item.title}
            </h3>
            <p className="text-gray-600 text-sm">
              Every moment is captured with love, creativity & perfection.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default ContactUs;
