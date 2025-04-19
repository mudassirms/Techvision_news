"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email address",
      }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: value ? "" : `${name} is required` }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: value ? "" : "Phone number is required" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message, phone } = formData;

    if (!name || !email || !message || !phone) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (errors.email || errors.phone) {
      toast.error("Please correct the errors.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_04odo0c", // your service ID
        "template_gqgqb4c", // your template ID
        {
          name,
          email,
          phone,
          message,
          time: new Date().toLocaleString(),
          title: "New Contact Form Submission",
        },
        "M-pTkSNkHoQjr6oSd" // your public key
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("❌ Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-6 w-full max-w-sm mx-auto" // Cleaned up styling
      >
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 w-full" // Simplified layout
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full p-2 rounded bg-gray-700 border ${errors.name ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`w-full p-2 rounded bg-gray-700 border ${errors.email ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <PhoneInput
            country={"us"}
            value={formData.phone}
            onChange={handlePhoneChange}
            enableSearch={true}
            searchPlaceholder="Search country"
            preferredCountries={["us", "in", "gb", "ca"]}
            inputClass="!w-full !p-2 !bg-gray-700 !text-white !border !border-gray-600 !rounded"
            buttonClass="!bg-gray-700"
            dropdownClass="!bg-gray-800 !text-white !z-[1000] !max-h-[250px] !overflow-y-auto !border !border-gray-700"
            containerClass="!w-full"
            searchStyle={{
              backgroundColor: "#1f2937", // bg-gray-800
              color: "#ffffff",
              border: "1px solid #4b5563",
              borderRadius: "0.35rem",
              padding: "0.5rem",
              marginBottom: "0.5rem",
            }}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="3" // Reduced height
            className={`w-full p-2 rounded bg-gray-700 border ${errors.message ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 p-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transition"
          >
            {loading && (
              <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </motion.div>
    </>
  );
}
