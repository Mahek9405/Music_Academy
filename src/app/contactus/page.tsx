

"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again!");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-700 text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12 mt-20">
        <h1 className="text-4xl font-extrabold text-teal-400">Contact Us</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          Have questions? Get in touch with us and we’ll respond as soon as possible.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="p-6 flex flex-col items-center text-center bg-gray-800 h-full rounded-xl">
            <MapPin className="w-10 h-10 text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold text-teal-400 mb-2">Our Address</h3>
            <p className="text-gray-300">123 Music Street, Pune, India</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="p-6 flex flex-col items-center text-center bg-gray-800 h-full rounded-xl">
            <Phone className="w-10 h-10 text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold text-teal-400 mb-2">Call Us</h3>
            <p className="text-gray-300">+91 98765 43210</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="p-6 flex flex-col items-center text-center bg-gray-800 h-full rounded-xl">
            <Mail className="w-10 h-10 text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold text-teal-400 mb-2">Email Us</h3>
            <p className="text-gray-300">support@musicacademy.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto mb-12">
        <div className="p-8 bg-gray-800">
          <h3 className="text-2xl font-bold text-teal-400 text-center mb-6">
            Send us a Message
          </h3>
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-teal-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-teal-500 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p className="text-center mt-4 text-lg font-medium">
              {status}
            </p>
          )}
        </div>
      </div>

      {/* Google Map */}
      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.943502679106!2d73.8567433!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06e1d9d7e11%3A0x89f1c7e59d4e5c5d!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693668045000!5m2!1sen!2sin"
          className="w-full h-[400px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
