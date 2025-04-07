"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setErrors({
        ...errors,
        email: /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email address",
      });
    } else {
      setErrors({ ...errors, [name]: value ? "" : `${name} is required` });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (errors.email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_ahyiltc",
        "template_1hxwllk",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "New Contact Form Submission",
        },
        "jcssRf25WKtjOrVv0"
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("❌ Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-6 space-y-4 max-w-md mx-auto"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={`w-full p-3 rounded bg-gray-700 border ${
            errors.name ? "border-red-500" : "border-gray-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className={`w-full p-3 rounded bg-gray-700 border ${
            errors.email ? "border-red-500" : "border-gray-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className={`w-full p-3 rounded bg-gray-700 border ${
            errors.message ? "border-red-500" : "border-gray-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
    </>
  );
}
