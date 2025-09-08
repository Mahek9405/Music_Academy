"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";

const EnrollPage = () => {
  const { slug } = useParams();
  const courseName = slug ? slug.toString().replace("-", " ") : "Course";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "Beginner",
    schedule: "Morning",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(""); // Reset status

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, course: slug }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Enrollment successful! We’ll contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          experience: "Beginner",
          schedule: "Morning",
        });
      } else {
        setStatus("❌ Failed to enroll. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6 mt-22">
      <div className="w-full max-w-lg bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-teal-400 text-center mb-3">
          Enroll in {courseName}
        </h1>
        <p className="text-gray-400 text-center mb-6 text-sm">
          Please fill the form below to join your selected course. We’ll contact you shortly with the details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Your Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">Experience Level</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-400"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          {/* Schedule */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">Preferred Schedule</label>
            <select
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-400"
            >
              <option>Morning</option>
              <option>Evening</option>
              <option>Weekend</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 hover:bg-teal-600 text-black font-semibold p-3 rounded-lg transition disabled:opacity-50 pointer-cursor"
          >
            {loading ? "Submitting..." : "Submit Enrollment"}
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="text-center mt-4 text-lg font-medium">
            {status}
          </p>
        )}

        <p className="text-xs text-gray-400 mt-4 text-center">
          🔒 We respect your privacy. Your details will not be shared.
        </p>
      </div>
    </div>
  );
};

export default EnrollPage;
