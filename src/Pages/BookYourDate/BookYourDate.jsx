import React, { useState } from "react";
import { FaWhatsapp, FaHeart, FaCheckCircle } from "react-icons/fa";

const BookYourDate = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    location: "",
    shootType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("❤️ Thanks! We’ll check availability & contact you soon.");
    setFormData({
      name: "",
      phone: "",
      date: "",
      location: "",
      shootType: "",
      message: "",
    });
  };

  return (
    <div className="w-full bg-white text-gray-800">

      {/* Hero */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552')] bg-cover bg-center">
        <div className="bg-black/70">
          <div className="max-w-7xl mx-auto px-6 py-32 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Your Wedding Date
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your love story deserves to be captured beautifully & forever
            </p>
            <p className="mt-4 text-sm text-gray-300">
              ⚠️ Limited dates available for this wedding season
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">
            Let’s Capture Your Forever 💍
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Tell us about your big day and we’ll take care of turning
            your moments into timeless memories filled with love & emotions.
          </p>

          {/* Why Book With Us */}
          <div className="space-y-4">
            {[
              "100+ Happy Couples",
              "Candid & Cinematic Photography",
              "Friendly & Professional Team",
              "Premium Albums & Films",
              "On-Time Delivery Promise",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919876543210?text=Hi,%20I%20want%20to%20book%20my%20wedding%20date."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-7 py-3 rounded-full hover:scale-105 transition"
          >
            <FaWhatsapp className="text-xl" />
            Book Instantly on WhatsApp
          </a>
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-10 rounded-3xl shadow-xl space-y-6"
        >
          <h3 className="text-2xl font-semibold text-center mb-4">
            Check Availability
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

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-black outline-none"
          />

          <input
            type="text"
            name="location"
            placeholder="Wedding Location / City"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-black outline-none"
          />

          <select
            name="shootType"
            value={formData.shootType}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-black outline-none"
          >
            <option value="">Select Shoot Type</option>
            <option>Wedding</option>
            <option>Pre-Wedding</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your story..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-black outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition text-lg"
          >
            Check Availability
          </button>
        </form>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">
            How Booking Works
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Share Wedding Details",
              "We Check Availability",
              "Finalize Package",
              "We Capture Your Love ❤️",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <FaHeart className="mx-auto mb-4 text-xl text-red-500" />
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BookYourDate;
