"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin } from "lucide-react";

// Dynamically import ContactForm (no SSR)
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-300 mb-10">
          We'd love to hear from you. Fill out the form below and we’ll be in touch shortly.
        </p>

        {/* Contact Form */}
        <ContactForm />

        {/* Company Contact Info */}
        <div className="mt-12 border-t border-gray-700 pt-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Contact Details</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-blue-500" />
              <p className="text-gray-300">Email</p>
              <p className="font-semibold">contact@yourcompany.com</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-blue-500" />
              <p className="text-gray-300">Phone</p>
              <p className="font-semibold">+1 (123) 456-7890</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-500" />
              <p className="text-gray-300">Address</p>
              <p className="font-semibold">123 Fintech Ave, Suite 456<br />San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
